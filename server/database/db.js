import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Connection = async () => {
  try {
    await mongoose.connect(process.env.URL, { useNewUrlParser: true });
    console.log("Connected to successfully");
  } catch (error) {
    console.log("Error connecting", error);
  }
};

export default Connection;
