import express, { urlencoded, json } from "express";
import { configDotenv } from "dotenv";
import userAuthenticate from "./Middleware/userAuthentication.js";
configDotenv();
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use(userAuthenticate); 
    


app.get('/', (req, res) => {
    console.log("hello");
    res.send("Hello, World!");
});

app.listen(port, () => {
    console.log(`Server Started on Port ${port}`);
});
