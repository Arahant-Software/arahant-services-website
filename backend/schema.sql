-- Run this against your MySQL server to set up the database used by the backend.
-- e.g. mysql -u <user> -p < schema.sql

CREATE DATABASE IF NOT EXISTS arahant_services;
USE arahant_services;

CREATE TABLE IF NOT EXISTS callback_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  phone VARCHAR(50) NOT NULL,
  preferred_time VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
