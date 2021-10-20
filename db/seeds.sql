INSERT INTO department(department_name)
VALUES( "Human Resources"),
      ( "Engineering"),
      ( "Customer Service"),
      ( "Sales");

INSERT INTO role (title, salary, department)
VALUES ( "HR Specialist", 75000,1),
       ( "HR Generalist", 65000,1),
       ( "Sr Web Developer", 95000, 2),
       ( "Jr Web Developer", 65000,2),
       ( "Customer Service Rep", 45000, 3),
       ( "Sales Representative", 75000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Russ", "Landes", 2, null),
       ("Paran", "Kashani", 3,1),
       ("Dillon", "Baxendell",3, 1),
       ("David", "Vinge",5, null),
       ("Christine", "Relf",5,5),
       ("Kate", "Landes",4,5),
       ("Sue", "Dorweiler",5, 5),
       ("Matt", "Goings",4, 5),   
       ("Bev", "Hanson",1, null),
       ("Sarah", "Golden",6, 9);
