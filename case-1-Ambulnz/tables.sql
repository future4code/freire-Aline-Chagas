-- Active: 1662659335013@@35.226.146.116@3306@freire-aline-chagas
CREATE TABLE IF NOT EXISTS Amb_pizzas(
    NAME VARCHAR(255) PRIMARY KEY,
    PRICE DECIMAL(3,2) NOT NULL
);
CREATE TABLE IF NOT EXISTS Amb_ingredients(
    NAME VARCHAR(255) PRIMARY KEY 
);
CREATE TABLE IF NOT EXISTS Amb_pizzas_ingredients(
    PIZZA_NAME VARCHAR(255) NOT NULL,
    INGREDIENT_NAME VARCHAR(255) NOT NULL,
    FOREIGN KEY (PIZZA_NAME) REFERENCES Amb_pizzas(name),
    FOREIGN KEY (INGREDIENT_NAME) REFERENCES Amb_ingredients(name)
);

CREATE TABLE IF NOT EXISTS  Amb_order_item(
ID MEDIUMINT AUTO_INCREMENT PRIMARY KEY,
NAME VARCHAR (255) NOT NULL,
QUANTITY TINYINT,
FOREIGN KEY (NAME) REFERENCES Amb_pizzas(name)
);

CREATE TABLE IF NOT EXISTS  Amb_orders(
id VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS Amb_orders_order_item(
    order_id VARCHAR(255) NOT NULL,
    item_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Amb_order_item(name)
);
INSERT INTO `Amb_pizzas_ingredients` VALUES(
"Bufala",
"Mozzarella di bufala"
);


SELECT * FROM `Amb_pizzas`
JOIN `Amb_pizzas_ingredients` 
ON Amb_pizzas_ingredients.PIZZA_NAME = Amb_pizzas.NAME 
WHERE NAME = "Margherita";

SELECT * FROM `Amb_orders`
JOIN `Amb_orders_order_item` 
ON Amb_orders_order_item
WHERE NAME = "Margherita";

