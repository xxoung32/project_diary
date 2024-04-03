import AppDataSource from "./src/models/dataSource";
import app from "./app";

const start = async () => {
  await AppDataSource.initialize();
  console.log("데이터베이스 연결 성공!");
  app.listen(3000, () => {
    console.log(`server is running`);
  });
};

start();
