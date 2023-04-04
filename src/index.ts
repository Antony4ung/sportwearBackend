import * as dotenv from "dotenv";
dotenv.config();

import morgan from "morgan";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { categoryRouter, productRouter, userRouter } from './routes'

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
app.use(helmet());
app.use(morgan("combined"));

const limiter = rateLimit({
  windowMs: 7 * 60 * 1000, // 7 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.get("/", (req: Request, res: Response) => {
  console.log(process.env.SECRET_CODE);
  res.send("Healthy");
});

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/categories", categoryRouter)

const PORT = process.env.PORT || 8000;
const MongoUrl = process.env.MONGODB_URI;

mongoose
  .connect(MongoUrl as string)
  .then(() => console.log("mongodb connected"));

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
