import AppDataSource from "./dataSource";
import { Product } from "../dto/productDto";
import { UpdateProduct } from "../dto/productDto";

const createProduct = async (product: Product) => {
  console.log("데이터베이스");
  const createdResult = await AppDataSource.query(
    `INSERT INTO products (name, price, image, description) VALUES ($1, $2, $3, $4) RETURNING *`,
    [product.name, product.price, product.image, product.description]
  );
  console.log("db 등록 완");
  console.log("createdResult:", createdResult);
  return createdResult;
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
};
const productDao = { createProduct, updateProduct, deleteProduct };

export default productDao;
