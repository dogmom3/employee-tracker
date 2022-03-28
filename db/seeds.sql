USE employee_tracker;

INSERT INTO department (name)
    VALUES
    ('Training'),
    ('Walking'),
    ('Boarding'),
    ('Grooming'),
    ('Social');

INSERT INTO role (title, salary, dept_id)
    VALUES
    ('Dog Trainer', '50000.00', '1'),
    ('Dog Walker', '50000.00', '2'),
    ('Dog Daycare', '45000.00', '3'),
    ('Dog Groomer', '45000.00', '4'),
    ('Dog Party Planner', '45000.00', '5');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
    ('Blair','Seivers',1,null),
    ('Waldo','Earl',2,1),
    ('Violet','Tripawd',3,1),
    ('Pepper','Foster',4,null),
    ('Arlene','Sandra',5,null);


