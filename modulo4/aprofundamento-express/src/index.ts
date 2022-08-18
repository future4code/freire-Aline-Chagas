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
  completed: boolean | string;
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

app.post('/createTask', (req, res) => {
  const newTaskList = {
    userId: req.body.userId,
    id: req.body.id,
    title: req.body.title,
    completed: req.body.completed
  }
const tasks = list
list.push(newTaskList)
  res.send(tasks)
})

app.put('/editTask/:id', (req,res)=>{
  const idTask = Number(req.params.id)
  const editTask = list.filter((task)=>{
    return task.id === idTask
  })
  editTask[0] ={
    ...editTask[0],
    completed:!editTask[0].completed
  }
  const updatedList = list.map((task) => {
    if (task.id === idTask) {
        return editTask[0]
    } else {
        return task
    }
})
res.send(updatedList)
})

app.delete('/deleteTask/:id', (req,res)=>{
  const idTask = Number(req.params.id)
  const updatedTask = list.filter((task)=>{
    return task.id !== idTask
  }) 
res.send(updatedTask)
})

app.get('/userTask/:userId', (req,res)=>{
  const userId = Number(req.params.userId)
  const userTask = list.filter((task)=>{
    return task.userId === userId
  }) 
res.send(userTask)
})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
