import express from "express";
import cors from "cors";
import { user } from "./user"

const app = express();

app.use(express.json());
app.use(cors());

const bankList = user
// endpoint lista usuario
app.get("/userList", (req, res) => {
    res.send(bankList);
  });

// endpoint criar conta


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});