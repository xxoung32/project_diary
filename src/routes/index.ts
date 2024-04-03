import express, { Router } from "express";
import productRouter from "./productRouter";

const router: Router = express.Router();

router.use("/products", productRouter);

export default router;
