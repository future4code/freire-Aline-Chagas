import { connection } from "./connection";
const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

const createTables = () =>
  connection
    .raw(
      `
      CREATE TABLE IF NOT EXISTS labecommerce_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL UNIQUE,
         password VARCHAR(255) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS labecommerce_products(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         price VARCHAR(255) NOT NULL,
         image_url VARCHAR(255) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS labecommerce_purchases(
         id VARCHAR(255) PRIMARY KEY,
         user_id VARCHAR(255),
         FOREIGN KEY (user_id)REFERENCES labecommerce_users (id),
         product_id VARCHAR(255)NOT NULL, 
         FOREIGN KEY (product_id)REFERENCES labecommerce_products(id),
         quantity INT NOT NULL,
         total_price VARCHAR (255) NOT NULL
      );
   `
    )
    .then(() => {
      console.log("Tabela criada");
    })
    .catch(printError);

const closeConnection = () => {
  connection.destroy();
};

createTables()
  .then(() => console.log("Banco pronto!"))
  .finally(closeConnection);
