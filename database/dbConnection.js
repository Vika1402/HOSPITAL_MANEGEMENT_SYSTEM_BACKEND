import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const dbConnection = () => {
  const mongoURI = process.env.MONGO_URI;

  mongoose.connect(mongoURI, {
    dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM"
  }).then(() => {
    console.log("Connected to database");
  }).catch(err => {
    console.error("Error connecting to database:", err);
  });
};
