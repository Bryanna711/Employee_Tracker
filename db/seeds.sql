INSERT INTO department(id, department_name)
VALUES(001, "Human Resources"),
      (002, "Engineering"),
      (003, "Customer Service"),
      (004, "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES (011, "HR Specialist", 75000, 001),
       (022, "Sr Web Developer", 95000, 002),
       (033, "Jr Web Developer", 65000, 002),
       (044, "Customer Service Rep", 45000, 003),
       (055, "Sales Representative", 75000, 004),
       (066, "HR Generalist", 65000, 001);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (111,"Sarah", "Golden",066, 001),
       (222,"Christine", "Relf",055,006),
       (333,"Bev", "Hanson",011, null),
       (444,"Kate", "Landes",044,006),
       (555,"Russ", "Landes",022, null),
       (666,"David", "Vinge",055, null),
       (777,"Sue", "Dorweiler",055, 006),
       (888,"Matt", "Goings",044, 006),
       (999,"Paran", "Kashani",033,005),
       (1000, "Dillon", "Baxendell",033,005);
