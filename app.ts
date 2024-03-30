import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 8000);

app.get("/", (req: Request, res: Response) => {
  console.log("nodemon");
  res.send("Hello World!");
});

app.listen(app.get("port"), () => {
  console.log(`listening.... http://localhost:${app.get("port")}`);
});
