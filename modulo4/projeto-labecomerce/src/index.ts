import { AddressInfo } from "net";
import app from "./app";
import createUser from "./endpoints/createUser";
import getAllUsers from "./endpoints/getAllUsers";
import createProduct from "./endpoints/createProduct"
import getAllProducts from "./endpoints/getAllProducts";

app.get("/users", getAllUsers)

app.get("/products",getAllProducts)

app.post("/users", createUser)

app.post("/products", createProduct)

app.post("/purchases")


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});