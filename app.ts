import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routes";
import errorHandler from "./src/middleware/errorHandler";

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3000);
app.use(router);

app.get("/", (req: Request, res: Response) => {
  console.log("nodemon");
  res.status(200).send("Hello World!");
});

app.use(errorHandler.routerNotFoundHandler);
app.use(errorHandler.errorHandler);

export default app;
