import userClass from "./endpoints/userClass";
import app from "./app";


const userController = new userClass

app.post("/users/signup",userController.signUp );
app.post("/users/login",userController.login );
app.get("/users/profile",userController.getProfile)
app.get("/users/:id/profile", )

app.post("/recipe");
app.get("/recipe/:id")




