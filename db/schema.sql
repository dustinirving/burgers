-- Delete the database if it already exists
DROP DATABASE IF EXISTS burgers_db;
-- Create the the database burgers_db
CREATE DATABASE burgers_db;
-- Use the burgers_db
USE burgers_db;
-- Create a burgers table with (an id, burger_name, devoured, PRIMARY KEY)
CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false, 
    PRIMARY KEY (id)
);