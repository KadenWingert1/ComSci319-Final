create database if not exists Comsci319Final;
USE Comsci319Final;

CREATE TABLE products (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  price DECIMAL(10, 2),
  description TEXT,
  category VARCHAR(255),
  image VARCHAR(255),
  rating FLOAT,
  rating_count INT
);
