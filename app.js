import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import path from "path";
import { fileURLToPath } from "url";
// Local imports
import connectDB from './configs/dbConfig.js';
import userRoute from './routes/userRoute.js';
import adminRoute from './routes/adminRoute.js';
import productRoute from './routes/productRoute.js';


const app = express(); // app req
app.set("view engine", "ejs"); // view engine

const PORT = process.env.PORT; // port 

// Static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/admin", adminRoute);
app.use("/user", userRoute);
app.use("/product", productRoute);

app.listen(PORT, () => {
    connectDB();
});