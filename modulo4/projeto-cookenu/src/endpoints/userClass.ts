import { Request, Response } from "express";
import { connectionDB } from "../data/connectionDB";
import UserData from "../data/userData";
import User from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export default class userClass {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        res.statusCode = 422;
        throw new Error("Preencha seu email e senha");
      }
      const connection = new UserData();
      const user = await connection.loginUser(email);

      if (!user) {
        res.statusCode = 409;
        throw new Error("usuário não encontrado");
      }

      const instanceHash = new HashManager();
      const isCompareHash = await instanceHash.compareHash(
        password,
        user.password
      );
      if (!isCompareHash) {
        res.statusCode = 409;
        throw new Error("Senha Incorreta");
      }

      const newToken = new Authenticator();
      const token = newToken.generateToken({ id: user.id, role: user.role });

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(500).send({ message: error.message || error.sqlMessage });
    }
  }

  async signUp(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password || !role) {
        res.statusCode = 422;
        throw new Error("Preencha todos os campos");
      }

      const connection = new UserData();
      const user = await connection.loginUser(email);

      if (user) {
        res.statusCode = 409;
        throw new Error("Email já cadastrado");
      }

      const uuidClass = new GenerateId();
      const id: string = uuidClass.generateId();

      const instanceHash = new HashManager();
      const hash = await instanceHash.generateHash(password);

      const newUserInstance = new User(id, name, email, hash, role);

      const insertUserData = new UserData();
      const result = await insertUserData.signUp(newUserInstance);

      const newToken = new Authenticator();
      const token = newToken.generateToken({ id: id, role: role });

      res.status(201).send({ newUserInstance, token });
    } catch (error: any) {
      res.status(500).send({ message: error.message || error.sqlMessage });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error("token inválido");
      }
      const id: any = new Authenticator().getTokenData(token);

      const userData = new UserData();
      const user = await userData.getUserById(id);

      res.status(201).send({ id: user.id, name: user.name, user: user.email });
    } catch (error: any) {
      res.status(500).send({ message: error.message || error.sqlMessage });
    }
  }

  async getOtherUserProfile(req: Request, res: Response) {
    try {
      const token = req.headers.authorization;
      const idUser = req.params.id;
      if (!token) {
        throw new Error("token inválido");
      }
      const id: any = new Authenticator().getTokenData(token);

      const userData = new UserData();
      const user = await userData.getUserById(idUser);

      res.status(201).send({ id: user.id, name: user.name, user: user.email });
    } catch (error: any) {
      res.status(500).send({ message: error.message || error.sqlMessage });
    }
  }
}
