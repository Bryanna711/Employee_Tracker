const fs = require('fs');
const express = require("express");
const mysql = require('mysql2');
const inquirer = require("inquirer");
const { resourceLimits } = require('worker_threads');

const PORT = process.env.PORT || 3001;

const app = express();

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Vinge711",
        database: "tracker_db"
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
        .then((answer) => {
            if ("View all Departments") {
                viewDept()

            }
            if ("View all Roles") {
                viewRole()

            }
            if ("View all Employees") {
                viewEmployee()

            }
            if ("Add a Department") {
                addDept()
            }
            if ("Add a Role") {
                addRole()
            }
            if ("Add an Employee") {
                addEmployee()
            }
            if ("Update an Employee") {
                updateEmployee()
            }

        })
};

const viewDept = () =>{
app.get('/api/tracker/department',(req, res) =>{
    const sql = `SELECT id, department_name AS title FROM tracker`;

    db.query(sql, (err, rows)=>{
        err ? res.status(500).json({err: err.message}) :
        res.json({
            message:'Success',
            data: rows
        });    
    });
});
}

const viewRole = () =>{
    app.get('/api/tracker/role',(req, res) =>{
        const sql = `SELECT id, title AS title FROM tracker`;
    
        db.query(sql, (err, rows)=>{
            err ? res.status(500).json({err: err.message}) :
            res.json({
                message:'Success',
                data: rows
            });    
        });
    }); 
}

const viewEmployee = () =>{
    app.get('/api/tracker/employee',(req, res) =>{
        const sql = `SELECT first_name AS title FROM tracker`;
    
        db.query(sql, (err, rows)=>{
            err ? res.status(500).json({err: err.message}) :
            res.json({
                message:'Success',
                data: rows
            });    
        });
    }); 
}

const addDept = () =>{
    app.post('/api/tracker/department', (req,res) => {
        const sql = `INSERT INTO tracker (department_name)
        VALUES (?)`;
        const params = [body.department_name];

        db.query(sql, params, (err, result)=>{
            err ? res.status(400).json({err: err.message}) :
            res.json({
                message:'Success',
                data: rows
            });    
        });
    })
}

const addRole = () =>{
    app.post('/api/tracker/role', (req,res) => {
        const sql = `INSERT INTO tracker (title, salary, department_id)
        VALUES (?)`;
        const params = [body.title, body.salary, body.department_id];
       
        db.query(sql, params, (err, result)=>{
            err ? res.status(400).json({err: err.message}) :
            res.json({
                message:'Success',
                data: rows
            });    
        });
    })
}

const addEmployee = () =>{
    app.post('/api/tracker/employee', (req,res) => {
        const sql = `INSERT INTO tracker (first_name, last_name, role_id, manager_id)
        VALUES (?)`;
        const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
      
        db.query(sql, params, (err, result)=>{
            err ? res.status(400).json({err: err.message}) :
            res.json({
                message:'Success',
                data: rows
            });    
        });
    })
}

const updateEmployee = () =>{
    app.put('/api/tracker/employee/:employee_id', (req, res) => {
        const sql = `UPDATE employee SET employee = ? WHERE id = ?`;
        const params = [req.body.employee, req.params.id];
       
        db.query(sql, params, (err, result)=>{
            err ? res.status(400).json({err: err.message}) :
            res.json({
                message:'Success',
                data: req.body,
                changes : result.affectedRows
            });    
        });

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