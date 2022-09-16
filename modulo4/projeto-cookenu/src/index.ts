import userClass from "./endpoints/userClass";
import app from "./app";


const userController = new userClass

app.post("/signup",userController.signUp );
app.post("/login",userController.login );
app.get("/user/profile",userController.getProfile)
app.get("/user/:id",userController.getOtherUserProfile )

app.post("/recipe");
app.get("/recipe/:id")




