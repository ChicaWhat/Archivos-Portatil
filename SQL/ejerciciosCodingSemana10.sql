CREATE DATABASE IF NOT EXISTS bootcamp;

USE bootcamp;

DROP TABLE IF EXISTS addresses, students;

CREATE TABLE students (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    dni CHAR(11) UNIQUE NOT NULL
);

CREATE TABLE addresses (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	country VARCHAR(100),
    zipCode CHAR(5),
    address VARCHAR(200),
    city VARCHAR(100),
    studentId INT UNSIGNED NOT NULL,
    FOREIGN KEY (studentId) REFERENCES students (id)
);

INSERT INTO students (name, lastname, email, phone, dni)
VALUES
    ("Irvin", "Lethem", "ilethem0@google.com.au", "993870144", "279948941-9"),
    ("Kylie", "Mungan", "kmungan1@howstuffworks.com", "497494899", "748551874-7"),
    ("Yul", "Dibbert", "ydibbert2@businesswire.com", "776631050", "215649413-4"),
    ("Tamra", "Mc Gorley", "tmcgorley3@studiopress.com", "921948685", "617064473-7"),
    ("Elmira", "Imbrey", "eimbrey4@cpanel.net", "304168000", "178988896-4");


INSERT INTO addresses (country, zipCode, address, city, studentId)
VALUES
    ("Indonesia", "83297", "98339 Loftsgordon Road", "Babakanbandung", 1),
    ("Philippines", "44455", "74641 Dwight Avenue", "Bilar", 2),
    ("Indonesia", "62965", "9510 Milwaukee Street", "Sumberejo", 3),
    ("Norway", "54756", "8902 Doe Crossing Alley", "Steinkjer", 4),
    ("United States", "51471", "8616 Stephen Hill", "Charleston", 5);

-- Escribe a continuación el código SQL solicitado.

-- Selecciona todos los datos de los estudiantes incluyendo la información de su dirección.

SELECT s.id, s.name, s.lastname, s.email, s.phone, s.dni, a.address
FROM students s
JOIN addresses a ON a.studentId = s.id;

-- Selecciona el nombre, apellidos y email de los estudiantes de Indonesia.

SELECT s.name, s.lastname, s.email
FROM students s
JOIN addresses a ON a.studentId = s.id
WHERE a.country = 'Indonesia';

-- Usa ALTER TABLE para añadir a la tabla 'students' la columna 'age'

ALTER TABLE students ADD birthDate DATE;

-- Rellena la tabla age con los datos que tu quieras
/*
INSERT INTO students(birthDate)
VALUES
	('1995-10-5'),
    ('1996-5-10'),
    ('1995-2-25'),
    ('1995-10-14'),
    ('1994-9-1');
*/

UPDATE students 
SET birthDate = '1995-10-05'
WHERE id = 1;

UPDATE students 
SET birthDate = '1996-05-10'
WHERE id = 2;

UPDATE students 
SET birthDate = '1995-02-25'
WHERE id = 3;

UPDATE students 
SET birthDate = '1995-07-14'
WHERE id = 4;

UPDATE students 
SET birthDate = '1994-11-01'
WHERE id = 5;

SELECT * FROM students;







