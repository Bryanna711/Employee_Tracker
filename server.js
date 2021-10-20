const mysql = require('mysql2');
const inquirer = require("inquirer");
const cTable = require('console.table');

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
            "Delete an Employee",
        ]
    })
        .then((answer) => {
            switch (answer.actions) {
                case "View all Departments":
                    viewDept();
                    break;

                case "View all Roles":
                    viewRole();
                    break;

                case "View all Employees":
                    viewEmployee();
                    break;

                case "Add a Department":
                    addDept();
                    break;

                case "Add a Role":
                    addRole();
                    break;

                case "Add an Employee":
                    addEmployee();
                    break;

                case "Update an Employee":
                    updateEmployee();
                    break;

                case "Delete an Employee":
                    deleteEmployee();
                    break;

            }
        })
};


const viewDept = () => {
    const sql = `SELECT * FROM department`;
    db.query(sql, (err, res) => {
        err ? console.log(err) : console.table(res);
    });
    toDo();
};


const viewRole = () => {
    const sql = `SELECT *
    FROM role
 JOIN department
    ON role.department = department.id`;

    db.query(sql, (err, res) => {
        err ? console.log(err) : console.table(res);
        toDo();
    });
};


const viewEmployee = () => {
    const sql = `SELECT *
    FROM employee
    JOIN role
    ON employee.role_id = role.role_id`;

    db.query(sql, (err, res) => {
        err ? console.log(err) : console.table(res);
        toDo();
    });
};

const addDept = () => {
    inquirer.prompt({
        type: "input",
        name: "department_name",
        message: "What is the department name?"
    })
        .then((answer) => {
            const sql = `INSERT INTO department (department_name) VALUES ("${answer.department_name}")`

            db.query(sql, (err, res) => {
                err ? console.log(err) : console.table(res);
                toDo();
            })
        });
};


const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the role title?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the role salary"
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the department id?"
        }
    ])
        .then((answer) => {
            const sql = `INSERT INTO role (title, salary, department) VALUES ["${answer.title}", "${answer.salary}", "${answer.department}"]`

            db.query(sql, (err, res) => {
                err ? console.log(err) : console.table(res);
                toDo();
            })
        });
};


const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the employee's role id?"
        },
        {
            type: "input",
            name: "manager_id",
            message: "What is the employee's manager's id?"
        },
    ])
        .then((answer) => {
            const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answer.first_name}", "${answer.last_name}", "${answer.role_id}", "${answer.manager_id}")`
            db.query(sql, (err, res) => {
                err ? console.log(err) : console.table(res);
                toDo();
            })
        });
};

const updateEmployee = () => {

    inquirer.prompt(
        [
            {
                type: "input",
                name: "empID",
                message: "What is the employee's id that you'd like to update?"
            },
            {
                type: "input",
                name: "first_name",
                message: "What is the employee's first name?"
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the employee's last name?"
            },
            {
                type: "input",
                name: "role_id",
                message: "What is the employee's role id?"
            },
            {
                type: "input",
                name: "manager_id",
                message: "What is the employee's manager's id?"
            },
        ])
        .then((answer) => {
            const sql = `UPDATE employee SET first_name = ("${answer.first_name}"), last_name = ("${answer.last_name}"), role_id = ("${answer.role_id}"), manager_id = ("${answer.manager_id}")  WHERE id = ("${answer.empID}")`;
            db.query(sql, (err, res) => {
                err ? console.log(err) : console.table(res);
                toDo();
            });
        });
};

const deleteEmployee = () => {

    inquirer.prompt(
        [
            {
                type: "input",
                name: "empID",
                message: "What is the employee's id that you'd like to delete?"
            },

        ])
        .then((answer) => {
            const sql = `DELETE FROM employee WHERE employee_id = ("${answer.empID}")`;
            db.query(sql, (err, res) => {
                err ? console.log(err) : console.table(res);
                toDo();
            });
        });
};

toDo();
