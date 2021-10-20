/* Connect Role to Department*/
SELECT  role.role_id AS RoleID, role.title AS Title, role.salary AS Salary, role.department AS Department_id, department.department_name AS Department_name
FROM role
LEFT JOIN department
ON role.department = department.id;


-- /*Connect Employee to Role*/
SELECT employee.employee_id AS EmpID, employee.first_name AS Employee_first_name, employee.last_name AS last_name, 
employee.manager_id AS ManagerID, role.role_id AS RoleID, role.title AS Title, role.salary AS Salary, role.department AS Department_id
FROM employee
LEFT JOIN role
ON employee.role_id = role.role_id;

SELECT manager.manager_id AS Manager_ID, manager.man_first_name AS Manager_first_name, manager.man_last_name AS last_name,
employee.first_name AS Employee_first_name, employee.last_name AS last_name
FROM manager
LEFT JOIN employee
ON manager.manager_id = employee.manager_id;

-- SELECT
-- employee.first_name AS first_name, employee.last_name AS last_name, manager.man_first_name AS manager_first_name, manager.man_last_name AS manager_last_name, 
-- FROM manager
-- JOIN manager_id ON manager.manager_id = employee.manager_id;
