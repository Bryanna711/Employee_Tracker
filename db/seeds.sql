INSERT INTO department(id, department_name)
VALUES(001, "Human Resources"),
      (002, "Engineering"),
      (003, "Customer Service"),
      (004, "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "HR Specialist", 75000, 001),
       (002, "Sr Web Developer", 95000, 002),
       (003, "Jr Web Developer", 65000, 002),
       (004, "Customer Service Rep", 45000, 003),
       (005, "Sales Representative", 75000, 004),
       (006, "HR Generalist", 65000, 001);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001,"Sarah", "Golden",006, 001),
       (002,"Christine", "Relf",005,006),
       (003,"Bev", "Hanson",001, null),
       (004,"Kate", "Landes",004,006),
       (005,"Russ", "Landes",002, null),
       (006,"David", "Vinge",005, null),
       (007,"Sue", "Dorweiler",005, 006),
       (008,"Matt", "Goings",004, 006),
       (009,"Paran", "Kashani",003,005),
       (010, "Dillon", "Baxendell",003,005);
