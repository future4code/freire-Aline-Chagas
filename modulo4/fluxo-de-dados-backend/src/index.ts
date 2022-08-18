import express from "express";

import { AddressInfo } from "net";
import { product } from "./data";

const list = product;

const app = express();

app.use(express.json());

app.get("/test", (req, res) => {
  res.send("oi, eu sou o teste!");
});

//   exercicio 3
app.post("/addProduct", (req, res) => {
  const addProduct = {
    id: req.body.id,
    name: req.body.name,
    price: req.body.price,
  };
  const product = list;
  list.push(addProduct);
  res.send(product);
});

// exercicio 4

app.get("/productList", (req, res) => {
  res.send(product);
});

// exercicio 5
app.put("/editProduct/:id", (req, res) => {
  const idProduct = Number(req.params.id);
  const editProduct = list.filter((product) => {
    return product.id === idProduct;
  });
  editProduct[0] = {
    ...editProduct[0],
    price: editProduct[0].price,
  };
  const updatedList = list.map((product) => {
    if (product.id === idProduct) {
      return editProduct[0];
    } else {
      return product;
    }
  });
  res.send(updatedList);
});
// exercício 6
app.delete("/deleteProduct/:id", (req, res) => {
  const idProduct = Number(req.params.id);
  const updatedList = list.filter((product) => {
    return product.id !== idProduct;
  });
  res.send(updatedList);
});
// exercicio 7
app.post("/addProduct", (req, res) => {
  const product = list;
  const { id, name, price } = req.body;
  const addProduct = { id, name, price };

  if (typeof name !== "string") {
    throw new Error("o nome do produto é inválido");
  }
  if (typeof price !== "number" && price <= 0) {
    throw new Error("o preço do produto é inválido");
  }

  product.push(addProduct);
  res.send(addProduct);
});

// exercicio 8
app.put("/editProduct/:id", (req, res) => {
  const idProduct = Number(req.params.id);
  const { name, price } = req.body;
  const editProduct = list.find((product) => {
    return product.id === idProduct;
  });

  if (!editProduct) { throw new Error('Produto não encontrado') }
  if (!price || typeof price !== "number" || price <= 0) {
    throw new Error("o preço do produto é inválido");
  }

  const editedProduct = { ...editProduct, name, price }
  const thisIndex = list.findIndex(i => i.id = idProduct)

  list[thisIndex] = editedProduct

  res.send(list);
});
// exercicio 9
app.delete("/deleteProduct/:id", (req, res) => {
  const idProduct = Number(req.params.id);
  const thisIndex = list.findIndex(i => i.id = idProduct)

  if (thisIndex === -1) {
    throw new Error('Produto não encontrado')
  }

  list.splice(thisIndex, 1)

  res.send(list);
});


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
