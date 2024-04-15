import productDao from "../models";
import { CreateProduct } from "../dto/productDto";
import { UpdateProduct } from "../dto/productDto";
import utils from "../utlis";

const createProduct = async (product: CreateProduct) => {
  console.log("서비스");
  const createdProduct = await productDao.createProduct(product);
  return createdProduct;
};

const updateProduct = async (productId: string, newProduct: UpdateProduct) => {
  console.log("u.service");
  const existingProduct = await productDao.findByProductId(productId);
  console.log("s.existingProduct: ", existingProduct);
  if (existingProduct.length === 0) {
    throw utils.throwError(404, "해당 상품이 없습니다.");
  }

  const updatedProduct = await productDao.updateProduct(productId, newProduct);

  return updatedProduct;
};

const deleteProduct = async (productId: string) => {
  const existingProduct = await productDao.findByProductId(productId);
  console.log("s.existingProduct: ", existingProduct);
  if (existingProduct.length === 0) {
    throw utils.throwError(404, "해당 상품이 없습니다.");
  }

  const deletedProduct = await productDao.deleteProduct(productId);

  return deletedProduct;
};

const getAllProducts = async () => {
  const allProducts = await productDao.getAllProducts();
  return allProducts;
};

const getProductById = async (productId: string) => {
  const existingProduct = await productDao.findByProductId(productId);
  console.log("s.existingProduct: ", existingProduct);
  if (existingProduct.length === 0) {
    throw utils.throwError(404, "해당 상품이 없습니다.");
  }

  const productDetail = await productDao.getProductById(productId);

  return productDetail;
};

const productService = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
};

export default productService;
