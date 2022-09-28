import { Router } from "express";
import { UserController } from "../controller/UserController";

export const userRouter = Router()

const userController = new UserController()

userRouter.post("/signup",userController.signup)
userRouter.post("/login",userController.login)
userRouter.get("/",userController.getUsers)
userRouter.delete("/:id",userController.deleteUser)
userRouter.put("/:id",userController.editUser)



// app.post("/users/signup", userController.signup)
// app.post("/users/login", userController.login)
// app.get("/users", userController.getUsers)
// app.delete("/users/:id", userController.deleteUser)
// app.put("/users/:id", userController.editUser)