-- Active: 1662659335013@@35.226.146.116@3306@freire-aline-chagas
CREATE TABLE IF NOT EXISTS cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL UNIQUE, 
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(10000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES cookenu_users(id)
);

ALTER TABLE cookenu_users
ADD role ENUM ("NORMAL", "ADMIN") DEFAULT "NORMAL";
