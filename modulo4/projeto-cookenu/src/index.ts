import app from "./app";
import login from "./endpoints/login";
import signUp from "./endpoints/signUp"


app.post("/users/signup",signUp );
app.post("/users/login", login );
app.get("/users/profile", )
app.get("/users/:id/profile", )

app.post("/recipe");
app.get("/recipe/:id")




