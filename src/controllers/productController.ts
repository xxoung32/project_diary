import { NextFunction, Request, Response } from "express";
import productService from "../services";
import utils from "../utlis";
import { Product, UpdateProduct } from "../dto/productDto";

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("controller");
  try {
    const product: Product = req.body;

    const result = await productService.createProduct(product);
    console.log("result: ", result);
    return res.status(201).json({
      message: "OK",
      result: result,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId: string = req.params.productId;
    const newProduct: UpdateProduct = req.body;

    const updatedResult = await productService.updateProduct(
      productId,
      newProduct
    );
    console.log("updatedResult: ", updatedResult);
    return res.status(201).json({
      message: "OK",
      updatedresult: updatedResult,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId: string = req.params.productId;
    const deletedResult = await productService.deleteProduct(productId);
    console.log("deletedResult: ", deletedResult);
    return res.status(201).json({
      message: "OK",
      deletedResult: deletedResult,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const productController = { createProduct, updateProduct, deleteProduct };

export default productController;
