import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
    process.exit(1); //1 means failure,0 means success
  }
};
