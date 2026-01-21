import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; 

const connectDB=async()=>{                   //function to connect to MongoDB database
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDb connected !! DB HOST: ${connectionInstance.connection.host} \n`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    }   
};

export default connectDB;