DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (30),
    PRIMARY KEY (id)
);

INSERT INTO department (name) values ("Sales");
INSERT INTO department (name) values ("Engineering");
INSERT INTO department (name) values ("Finance");
INSERT INTO department (name) values ("Legal");

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR (30),
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department (id)
);

INSERT INTO role (title, salary, department_id) values ("Sales Lead", 10000, 1);

INSERT INTO role (title, salary, department_id) values ("Salesperson", 8000, 1);

INSERT INTO role (title, salary, department_id) values ("Lead Engineer", 15000, 2);

INSERT INTO role (title, salary, department_id) values ("Software Engineer", 12000, 2);

INSERT INTO role (title, salary, department_id) values ("Accountant", 12500, 3);

INSERT INTO role (title, salary, department_id) values ("Legal Team Lead", 25000, 4);

INSERT INTO role (title, salary, department_id) values ("Lawyer", 18000, 4);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role (id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("John", "Doe", 1 , 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Mike", "Chan", 2 , 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Ashley", "Rodriguez", 3, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Kevin", "Tupik", 4, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Malia", "Brown", 5, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Sarah", "Lourd", 6, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id) values ("Tom", "Allen", 7, 6);