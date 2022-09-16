import userClass from "./endpoints/userClass";
import recipeClass from "./endpoints/recipeClass";
import app from "./app";


const userController = new userClass

const recipeController = new recipeClass

app.post("/signup",userController.signUp );
app.post("/login",userController.login );
app.get("/user/profile",userController.getProfile)
app.get("/user/:id",userController.getOtherUserProfile )

app.post("/recipe",recipeController.createRecipe);
app.get("/recipe/:id",recipeController.getRecipeById)

