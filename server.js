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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})