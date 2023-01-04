CREATE DATABASE IF NOT EXISTS Ciudad_accesible;

USE Ciudad_accesible;

CREATE TABLE users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    name VARCHAR(50) NOT NULL,
    role ENUM('admin', 'normal') DEFAULT 'normal'
);


CREATE TABLE ciudades (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(5000) NOT NULL,
    ciudadId INT UNSIGNED NOT NULL,
    FOREIGN KEY (ciudadId)
        REFERENCES users (id)
);


CREATE TABLE barrios (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(5000) NOT NULL,
    barrioId INT UNSIGNED NOT NULL,
    userId INT UNSIGNED NOT NULL,
    FOREIGN KEY (barrioId)
        REFERENCES ciudades (id),
    FOREIGN KEY (userId)
        REFERENCES users (id)
);


CREATE TABLE problemas (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(5000) NOT NULL,
    foto VARCHAR(100) NOT NULL,
    estado BOOLEAN DEFAULT TRUE,
    problemaId INT UNSIGNED NOT NULL,
    FOREIGN KEY (problemaId)
        REFERENCES barrios (id)
);


CREATE TABLE likes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    userId INT UNSIGNED NOT NULL,
    problemasId INT UNSIGNED NOT NULL,
    FOREIGN KEY (userId)
        REFERENCES users (id)
        ON DELETE CASCADE,
    FOREIGN KEY (problemasId)
        REFERENCES problemas (id)
        ON DELETE CASCADE
);