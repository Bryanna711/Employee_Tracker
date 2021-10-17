/* Connect Role to Department*/
SELECT *
FROM role
JOIN department
ON role.department_id = department.id


/*Connect Employee to Role*/
SELECT *
FROM employee
JOIN role
ON employee.role_id = role.id
