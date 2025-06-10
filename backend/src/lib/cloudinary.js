import { v2 as cloudinary } from "cloudinary";

import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
// This code configures the Cloudinary library with the necessary credentials to interact with the Cloudinary service. It uses environment variables to keep sensitive information secure. The `cloudinary` object can then be used to upload, manage, and manipulate media files in your application.
