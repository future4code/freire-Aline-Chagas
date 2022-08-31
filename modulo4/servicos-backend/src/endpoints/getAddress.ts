import axios from "axios";
import { Request, Response } from "express";
import { Address } from "../types/typeAddress";

export const getAddress = async (req: Request, res: Response) => {
  try {
    const cep = req.params.cep;
    const numero =Number(req.query.numero)
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log (result.data)

    const address:Address = {

      logradouro:result.data.logradouro,
      bairro: result.data.bairro,
      cidade:result.data.localidade,
      estado: result.data.uf,
      numero:numero,
      complemento:result.data.complemento,
      cep:result.data.cep
    }
    res.status(200).send(address)

  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
