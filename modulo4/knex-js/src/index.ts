import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());

// exercício 1
// a) o método raw retorna exatamente o que está no banco de dados, utilizando diretamente a linguagem SQL

app.get("/ator/:name", async(req,res) =>{
 try{
const name = req.params.name
const result = await connection.raw(`
  SELECT * FROM Actor
  WHERE name = "${name}"
 `);
 res.status(200).send(result);
 }catch(error:any) {
    res.status(500).send(error.sqlMessage || error.message);
 }
});


app.get('/ator/:gender', async (req,res) =>{
    try{
    const gender:string = req.params.gender
    const result = await connection.raw(`
    SELECT * FROM Actor
    WHERE gender = "${gender}"
    `);
    res.status(200).send(result[0]);

    }catch(error:any){
    res.status(500).send(error.sqlMessage || error.message);

    }
});

app.put("/ator/salario/:id", async (req, res) => {
    try {
     await connection("Actor")
        .update({
          salary: req.body.salary
        })
        .where({ id: req.params.id });

      res.status(200).send('alterado com sucesso');

    } catch (error: any) {
      res.status(500).send(error.sqlMessage || error.message);
    }
  });

app.delete("/ator/delete/:id", async (req, res) => {
  try {
    await connection("Actor").delete().where({ id: req.params.id });
    res.status(200).send("alterado com sucesso");
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.get("/ator/salario/:gender", async (req, res) => {
  try {
    const gender: string = req.params.gender;
    const result = await connection.raw(`
    SELECT AVG (salary) FROM Actor
    WHERE gender = "${gender}"
    `);
    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

app.post("/ator", async (req, res) => {
  try {
     await connection.raw(`
          INSERT INTO Actor (id, name, birth_date, salary, gender)
          VALUES(
              "${req.body.id}",
              "${req.body.name}",
              "${req.body.birth_date}",
               ${req.body.salary},
              "${req.body.gender}"
          );
          `);

    res.status(201).send("incluído com sucesso");
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
