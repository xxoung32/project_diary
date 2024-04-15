import { NextFunction, Request, Response } from "express";
import productService from "../services";
import utils from "../utlis";
import { CreateProduct, UpdateProduct } from "../dto/productDto";

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("controller");
  try {
    const product: CreateProduct = req.body;

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
    if (!productId) utils.throwError(400, "해당 상품이 없습니다.");
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

const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allProducts = await productService.getAllProducts();
    return res.status(200).json({
      message: "OK",
      allProducts: allProducts,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId: string = req.params.productId;
    const productDetail = await productService.getProductById(productId);

    console.log("productDetail: ", productDetail);
    return res.status(200).json({
      message: "OK",
      productDetail: productDetail,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const productController = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
};

export default productController;
