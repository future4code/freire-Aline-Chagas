import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("Pong! 🏓");
});

type List = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const list: List[] = [
  {
    userId: 1,
    id: 1,
    title: "lavar a louça",
    completed: true,
  },
  {
    userId: 1,
    id: 2,
    title: "comprar café",
    completed: false,
  },
  {
    userId: 2,
    id: 1,
    title: "passar roupas",
    completed: true,
  },
  {
    userId: 2,
    id: 2,
    title: "comprar ovos",
    completed: false,
  },
  {
    userId: 3,
    id: 1,
    title: "limpar a cozinha",
    completed: true,
  },
  {
    userId: 3,
    id: 2,
    title: "alimentar o gato",
    completed: false,
  },
];

app.get("/toDoListStatus", (req, res) => {
  const listStatus = req.query.completed;

  console.log({ list, listStatus });

  const tarefas = list.filter((tarefa) => {
    return tarefa.completed.toString() === listStatus
  });
  res.send({tarefas})
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
