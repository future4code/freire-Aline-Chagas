-- Active: 1662659335013@@35.226.146.116@3306@freire-aline-chagas
CREATE TABLE IF NOT EXISTS arq_users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL, 
    password VARCHAR(255) NOT NULL,
    role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL" NOT NULL
);