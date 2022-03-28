INSERT INTO department (name)
    VALUES
    ('Training'),
    ('Walking'),
    ('Boarding'),
    ('Grooming'),
    ('Social');

INSERT INTO role (name, salary, department_id)
    VALUES
    ('Dog Trainer', '50,000', '1'),
    ('Dog Walker', '50,000', '2'),
    ('Dog Daycare', '45,000', '3'),
    ('Dog Groomer', '45,000', '4'),
    ('Dog Party Planner', '45,000', '5');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
    ('Blair','Seivers','1','null'),
    ('Waldo','Earl','2','1'),
    ('Violet','Tripawd','3','1'),
    ('Pepper','Foster','4','null'),
    ('Arlene','Sandra','5','null');


