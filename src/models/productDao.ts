import AppDataSource from "./dataSource";
import { CreateProduct } from "../dto/productDto";
import { UpdateProduct } from "../dto/productDto";

const createProduct = async (product: CreateProduct) => {
  console.log("데이터베이스");
  const createdResult = await AppDataSource.query(
    `INSERT INTO products (name, price, image, description) VALUES ($1, $2, $3, $4) RETURNING *`,
    [product.name, product.price, product.image, product.description]
  );
  console.log("db 등록 완");
  console.log("createdResult:", createdResult);
  return createdResult;
};

const findByProductId = async (productId: string) => {
  const existingProduct = await AppDataSource.query(
    `SELECT id FROM products WHERE id = $1`,
    [productId]
  );
  console.log("existingProduct: ", existingProduct);
  return existingProduct;
};

const updateProduct = async (productId: string, newProduct: UpdateProduct) => {
  console.log("u.데이터베이스");
  const updatedResult = await AppDataSource.query(
    `
    UPDATE products
    SET
      name = $1,
      price = $2,
      image = $3,
      description = $4
    WHERE id = $5
    RETURNING *
  `,
    [
      newProduct.name,
      newProduct.price,
      newProduct.image,
      newProduct.description,
      productId,
    ]
  );
  console.log("db 업데이트 완");
  console.log("updatedResult:", updatedResult);
  return updatedResult;
};

const deleteProduct = async (productId: string) => {
  const deletedResult = await AppDataSource.query(
    `
    DELETE FROM products WHERE id = $1 RETURNING *
    `,
    [productId]
  );
  console.log("deletedResultDao: ", deletedResult);
  return deletedResult;
};

const getAllProducts = async () => {
  const allProducts = await AppDataSource.query(
    `SELECT id, name, image, price, created_at
    FROM products 
    ORDER BY created_at DESC`
  );
  console.log("allProducts: ", allProducts);
  return allProducts;
};
const getProductById = async (productId: string) => {
  const productDetail = await AppDataSource.query(
    `SELECT name, image, description
  FROM products
  WHERE id = $1`,
    [productId]
  );
  console.log("productDetail: ", productDetail);
  return productDetail;
};
const productDao = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  findByProductId,
  getAllProducts,
};

export default productDao;
