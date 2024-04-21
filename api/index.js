import express from "express";
import colors from "colors";
import connectDB from './config/db.js';
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server is running on port 3000 ...".yellow.bold);
});

// routes 
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);