
import express from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUsersByName } from "./endpoints/getUserByName";

export const app = express()

app.use(express.json())
app.use(cors())

// app.get("/users", getAllUsers)

app.get("/users/name", getUsersByName)

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})