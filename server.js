import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
cloudinary.v2.config({
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
