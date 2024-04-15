import express, { Router } from "express";
import productController from "../controllers";
import { validateBody } from "../middleware/classValidator";
import { CreateProduct, UpdateProduct } from "../dto/productDto";

const productRouter: Router = express.Router();

productRouter.get("/", productController.getAllProducts);
productRouter.get("/:productId", productController.getProductById);
productRouter.post(
  "/",
  validateBody(CreateProduct),
  productController.createProduct
);
productRouter.patch(
  "/:productId",
  validateBody(UpdateProduct),
  productController.updateProduct
);
productRouter.delete("/:productId", productController.deleteProduct);

export default productRouter;
