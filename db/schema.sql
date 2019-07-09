-- Create the `burgers_db`.
CREATE DATABASE burgers_db;
-- Switch to or use the `burgers_db`.
USE burgers_db;
-- Create a `burgers` table with these fields:
CREATE TABLE burgers
(
    -- id: an auto incrementing int that serves as the primary key.
	id int NOT NULL AUTO_INCREMENT,
    -- burger_name: a string.
	burger_name varchar(255) NOT NULL,
    -- devoured: a boolean.
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

