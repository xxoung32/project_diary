import express, { Router } from "express";
import productController from "../controllers";
import { validateBody } from "../middleware/classValidator";
import { Product } from "../dto/productDto";

const productRouter: Router = express.Router();

// productRouter.get("/", productController);
// productRouter.get("/:id");
productRouter.post("/", validateBody(Product), productController.createProduct);
productRouter.patch("/:productId", productController.updateProduct);
productRouter.delete("/:productId", productController.deleteProduct);

export default productRouter;
