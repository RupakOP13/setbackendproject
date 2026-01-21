//require("dotenv").config();
import app from './app.js'
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
});

connectDB().then(()=>{                  //connect to the database first
    app.listen(process.env.PORT||8000, () => {                       //then start the server
        console.log(`Server is running on port ${process.env.PORT}`);   //default port 8000 if PORT is not defined in .env
    });
}).catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);           //exit the process with failure
})












/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.error("Error connecting to the database:", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
})();
*/