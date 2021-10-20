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
            "View all Managers",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Add a Manager",
            "Update an Employee",
            "Update a Manager",
            "Delete an Employee",
            "Delete a Manager",
            "Delete a Role",
            "Delete an Department",
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

                case "View all Managers":
                    viewManager();
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

                case "Add a Manager":
                    addManager();
                    break;

                case "Update an Employee":
                    updateEmployee();
                    break;

                case "Update a Manager":
                    updateManager();
                    break;

                case "Delete an Employee":
                    deleteEmployee();
                    break;

                case "Delete a Manager":
                    deleteManager();
                    break;

                case "Delete a Role":
                    deleteRole();
                    break;

                case "Delete a Department":
                    deleteDepartment();
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
    const sql = `SELECT  role.role_id AS RoleID, role.title AS Title, role.salary AS Salary, role.department AS Department_id, department.department_name AS Department_name
    FROM role
    LEFT JOIN department
    ON role.department = department.id`;

    db.query(sql, (err, res) => {
        err ? console.log(err) : console.table(res);
        toDo();
    });
};


const viewEmployee = () => {
    const sql = `SELECT employee.employee_id AS EmpID, employee.first_name AS Employee_first_name, employee.last_name AS last_name, 
    employee.manager_id AS ManagerID, role.role_id AS RoleID, role.title AS Title, role.salary AS Salary, role.department AS Department_id
    FROM employee
    LEFT JOIN role
    ON employee.role_id = role.role_id`;

    db.query(sql, (err, res) => {
        err ? console.log(err) : console.table(res);
        toDo();
    });
};

const viewManager = () => {
    const sql = `SELECT manager.manager_id AS Manager_ID, manager.man_first_name AS Manager_first_name, manager.man_last_name AS last_name,
    employee.first_name AS Employee_first_name, employee.last_name AS last_name
    FROM manager
    LEFT JOIN employee
    ON manager.manager_id = employee.manager_id;`;

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

const addManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the managers's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the manager's last name?"
        },
    ])
        .then((answer) => {
            const sql = `INSERT INTO manager (man_first_name, man_last_name) VALUES ("${answer.first_name}", "${answer.last_name}")`
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

const updateManager = () => {

    inquirer.prompt(
        [
            {
                type: "input",
                name: "manager_id",
                message: "What is the manager's id that you'd like to update?"
            },
            {
                type: "input",
                name: "first_name",
                message: "What is the manager's first name?"
            },
            {
                type: "input",
                name: "last_name",
                message: "What is the manager's last name?"
            },
        ])
        .then((answer) => {
            const sql = `UPDATE manager SET man_first_name = ("${answer.first_name}"), man_last_name = ("${answer.last_name}")  WHERE manager_id = ("${answer.manager_id}")`;
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

const deleteManager = () => {

    inquirer.prompt(
        [
            {
                type: "input",
                name: "manager_id",
                message: "What is the manager's id that you'd like to delete?"
            },

        ])
        .then((answer) => {
            const sql = `DELETE FROM manager WHERE manager_id = ("${answer.manager_id}")`;
            db.query(sql, (err, res) => {
                err ? console.log(err) : console.table(res);
                toDo();
            });
        });
};

const deleteRole = () => {

    inquirer.prompt(
        [
            {
                type: "input",
                name: "roleID",
                message: "What is the role's id that you'd like to delete?"
            },

        ])
        .then((answer) => {
            const sql = `DELETE FROM role WHERE role_id = ("${answer.roleID}")`;
            db.query(sql, (err, res) => {
                err ? console.log(err) : console.table(res);
                toDo();
            });
        });
};

const deleteDepartment = () => {

    inquirer.prompt(
        [
            {
                type: "input",
                name: "departmentID",
                message: "What is the departments's id that you'd like to delete?"
            },

        ])
        .then((answer) => {
            const sql = `DELETE FROM department WHERE id = ("${answer.departmentID}")`;
            db.query(sql, (err, res) => {
                err ? console.log(err) : console.table(res);
                toDo();
            });
        });
};

toDo();
