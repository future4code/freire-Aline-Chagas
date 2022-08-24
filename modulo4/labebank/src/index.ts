import express from "express";
import cors from "cors";
import { user } from "./user";

const app = express();

app.use(express.json());
app.use(cors());

const bankList = user;
// endpoint lista usuario
app.get("/userList", (req, res) => {
    res.send(bankList);
  });

// endpoint criar conta
app.post("/addAccount", (req, res) => {
  const newAccount = user;
  const { id, name, age, cpf, birth } = req.body;
  const addAccount = { id, name, age, cpf, birth };

  if (age < 18) {
    throw new Error("Desculpe! menores de 18 não podem criar conta :(");
  }
  newAccount.push(addAccount);

  res.send(addAccount);
});

// endpoint pegar saldo

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
