import express from "express";

import { AddressInfo } from "net";
import {data} from "./data"

const list = data

const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
    res.send("oi, eu sou o teste!");
  });

//   exercicio 3
  app.post('/addProduct', (req, res) => {
    const addProduct = {
      id: req.body.id,
      name: req.body.name,
      price: req.body.price
    }
  const product = list
  list.push(addProduct)
    res.send(product)
  })

// exercicio 4

app.get("/productList", (req, res) => {
    res.send(data) 
  });

// exercicio 5

// exercício 6

// exercicio 7

// exercicio 8

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;