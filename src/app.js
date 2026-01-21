import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import dotenv from "dotenv";

dotenv.config({     //load environment variables from .env file
    path: "./.env"
}); 

app.use(cors(       //enable CORS for cross-origin requests
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
));

app.use(express.json({limit:"16kb"}));  //parses incoming json request body
app.use(express.urlencoded({extended:true,limit:"16kb"}));  //parses incoming requests with urlencoded payloads(like form data)
app.use(express.static("public"));//to serve static files like images ,css ,js
app.use(cookieParser()); //to parse cookies from incoming requests

//routes import

import userRouter from './routes/user.routes.js'

//routes declaration

app.use("/api/v1/users",userRouter)              //user routes

//http://localhost:8000/api/v1/users/register



export default app;