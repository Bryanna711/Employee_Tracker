/* Connect Role to Department*/
SELECT *
FROM role
LEFT JOIN department
ON role.department_id = department.id


/*Connect Employee to Role*/
SELECT *
FROM employee
LEFT JOIN role
ON employee.role_id = role.id
