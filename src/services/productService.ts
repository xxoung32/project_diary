import productDao from "../models";
import { Product } from "../dto/productDto";
import { UpdateProduct } from "../dto/productDto";

const createProduct = async (product: Product) => {
  console.log("서비스");
  const createdProduct = await productDao.createProduct(product);
  return createdProduct;
};

const updateProduct = async (productId: string, newProduct: UpdateProduct) => {
  console.log("u.service");
  const updatedProduct = await productDao.updateProduct(productId, newProduct);
  return updatedProduct;
};

const deleteProduct = async (productId: string) => {
  const deletedProduct = await productDao.deleteProduct(productId);
  return deletedProduct;
};

const productService = { createProduct, updateProduct, deleteProduct };

export default productService;
