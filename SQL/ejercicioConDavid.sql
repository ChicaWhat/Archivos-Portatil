-- Inner Join: retorna las filas de ambas tablas que mantengan una relación

CREATE TABLE IF NOT EXISTS departamentos (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS empleados (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(20),
    departamento_id INT UNSIGNED,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id)

);

INSERT INTO departamentos (nombre)
VALUES ('Ventas'), ('Académico'), ('Marketing'), ('Talento');

INSERT INTO empleados (nombre, departamento_id)
VALUES ('Sara', 1), ('Andrea,', 2), ('Laura', null), ('Juan', 2), ('Rafa', 3);

SELECT * FROM empleados
INNER JOIN departamentos ON departamentos.id = empleados.departamento_id;