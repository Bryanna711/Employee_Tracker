const fs = require('fs');
const express = require("express");
const mysql = require('mysql2');
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;

const app = express();

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Vinge711",
        database: "employees_db"
    },
    console.log("Connected to the database")
);

const toDo = () => {
    inquirer.prompt({
        type: "list",
        name: "actions",
        message: "What would you like to do?",
        choices: [
            "View all Departments",
            "View all Roles",
            "View all Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee",
        ]
    })
        .then((choice) => {
            if ("View all Departments") {

            }
            if ("View all Roles") {

            }
            if ("View all Employees") {

            }
            if ("Add a Department") {

            }
            if ("Add a Role") {

            }
            if ("Add an Employee") {

            }
            if ("Update an Employee") {

            }

        })
};

//API ROUTES
//Get - View ALL
//Post - Add ALL
//Put - Update Employee

//Functions for each choice
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})