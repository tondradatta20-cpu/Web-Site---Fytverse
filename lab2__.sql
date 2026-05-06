-- create database
create database if not exists dept_of_ICE;
use dept_of_ICE;
drop table if exists students,courses,enrollments;
create table students(
student_ID char(6) primary key,
name varchar(20),
phone_numner varchar(15),
gender char(1));

create table courses(
course_ID char(6) primary key,
course_title varchar(20),
credits float,
no_std_taken int);

create table enrollments(
enrollment_id int primary key,
student_ID char(6) ,
foreign key (student_ID) references students(student_ID) ,
course_ID char(6),
foreign key (course_ID) references courses(course_ID),
enrollment_date datetime);

-- i)insert 3 entries in each table
insert into students values
('2106','Tandra datta','017-00000000','F'),
('2105','Fatema jahan','017-00001111','F'),
('2107','Avishek bashak','017-00002222','M'),
('2108','Ritu sarkar','017-00003333','F');

insert into courses values 
('ICE306','database sessional', 1.50, 10),
('ICE305','DBMS', 3.00, 15),
('ICE301','AI and Robotics', 3.00, 5),
('ICE303','web programming', 4.00, 4);

INSERT INTO enrollments VALUES 
(1, '2106', 'ICE306', '2024-04-02 20:00:00'),
(2, '2107', 'ICE306', '2024-05-01 10:00:00'),
(3, '2106', 'ICE301', '2024-05-04 15:00:00'),
(4, '2108', 'ICE303', '2024-05-05 19:00:00');
select*from students;
select*from courses;
select*from enrollments;

-- ii)update the phone nunber of a student
update students set phone_numner ='01734567800' where student_ID='2106';
select*from students;

-- iii)apply trigger to update the no_std_taken field of the table students whenever a student takes that particular course.
delimiter //
CREATE TRIGGER update_no_std_taken
AFTER INSERT ON enrollments
FOR EACH ROW
BEGIN
    UPDATE courses
    SET no_std_taken = no_std_taken + 1
    WHERE course_ID = NEW.course_ID;
END //
delimiter ;
INSERT INTO enrollments 
VALUES (5, '2105', 'ICE306', '2024-05-06 12:00:00');
select*from courses;
