// const fs = require('fs');
// const express = require("express");
const mysql = require('mysql2');
const inquirer = require("inquirer");
const cTable = require('console.table');


const PORT = process.env.PORT || 3001;

// const app = express();

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
                viewDept(answer)

            }
            if ("View all Roles") {
                viewRole(answer)

            }
            if ("View all Employees") {
                viewEmployee(answer)

            }
            if ("Add a Department") {
                addDept(answer)
            }
            if ("Add a Role") {
                addRole()
            }
            if ("Add an Employee") {
                addEmployee(answer)
            }
            if ("Update an Employee") {
                updateEmployee(answer)
            }

        })
};


const viewDept = () =>{
// app.get('/api/department',(req, res) =>{
    const sql = `SELECT id, department_name AS department FROM department`;

    db.query(sql, (err, res)=>{
     err ? console.log(err) : console.table(res)
        // err ? res.status(500).json({err: err.message}) :
        // res.json({
        //     message:'Success',
        //     data: rows
        // });    
    });
};
// );
// };

const viewRole = () =>{
    // app.get('/api/role',(req, res) =>{
        const sql = `SELECT * FROM role`;
    
        db.query(sql, (err, res)=>{

            err ? console.log(err) : console.table(res)
        //     err ? res.status(500).json({err: err.message}) :
        //     res.json({
        //         message:'Success',
        //         data: rows
        //     });    
        });
    }
//     ); 
// };

const viewEmployee = () =>{
    // app.get('/api/employee',(req, res) =>{
        const sql = `SELECT * FROM employee`;
    
        db.query(sql, (err, res)=>{
            err ? console.log(err) : console.table(res)
            // err ? res.status(500).json({err: err.message}) :
            // res.json({
            //     message:'Success',
            //     data: rows
            // });    
        });
    }
//     ); 
// };

const addDept = () =>{
    inquirer.prompt({
        type:"input",
        name: "department_name",
        message: "What is the department name?"
    })
    .then((answer)=> {const sql = `INSERT INTO department (department_name), VALUES, (${answer.name})`

    db.query(sql,(err, res)=>{
        err ? console.log(err) : console.table(res)})
        });
    };


const addRole = () =>{
    app.post('/api/role', (req,res) => {
        const sql = `INSERT INTO role (title, salary, department_id)
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
};

const addEmployee = () =>{
    app.post('/api/employee', (req,res) => {
        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
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
};

const updateEmployee = () =>{
    app.put('/api/employee/:employee_id', (req, res) => {
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
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// });
toDo();

