CREATE DATABASE if not exists employee_db;
USE employee_db;
DROP TABLE IF EXISTS employe,works,company;

CREATE TABLE employe (
    person_name VARCHAR(50),
    street VARCHAR(50),
    city VARCHAR(50)
);

CREATE TABLE works (
    person_name VARCHAR(50),
    company_name VARCHAR(50),
    salary INT
);

CREATE TABLE company (
    company_name VARCHAR(50),
    city VARCHAR(50)
);
INSERT INTO employe VALUES
('Rahim', 'Street1', 'Pabna'),
('Karim', 'Street2', 'Natore'),
('Sakib', 'Street3', 'Pabna'),
('Rafi', 'Street4', 'Dhaka'),
('Naim', 'Street5', 'Natore');

INSERT INTO works VALUES
('Rahim', 'Square', 80000),
('Karim', 'Square', 95000),
('Sakib', 'Beximco', 120000),
('Rafi', 'Square', 100000),
('Naim', 'Beximco', 110000);

INSERT INTO company VALUES
('Square', 'Dhaka'),
('Beximco', 'Dhaka');

select*from employee;
select*from works;
select*from company;

-- i)name of employee who lives in pabna
SELECT person_name
FROM employe
WHERE city = 'Pabna';

-- ii)name of employee who lives in pabna  and whose salary is greater than 100000
SELECT e.person_name
FROM employe e
JOIN works w ON e.person_name = w.person_name
WHERE e.city = 'Pabna'
AND w.salary > 100000;

-- iii)name of each employee in square company with a salary between 90000 and 100000
SELECT person_name
FROM works
WHERE company_name = 'Square'
AND salary BETWEEN 90000 AND 100000;

-- iv)name of employee who lives in pabna or natore
SELECT person_name
FROM employe
WHERE city = 'Pabna' OR city = 'Natore';

-- v)employee who earns more than rahim
SELECT person_name
FROM works
WHERE salary > (
    SELECT salary
    FROM works
    WHERE person_name = 'Rahim'
);