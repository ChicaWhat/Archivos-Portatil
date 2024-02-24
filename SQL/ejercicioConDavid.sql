-- Inner Join: retorna las filas de ambas tablas que mantengan una relación
DROP TABLE IF EXISTS departamentos;
DROP TABLE IF EXISTS empleados;

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

-- Inner Join: reotrna todas las filas de la tabla de la izquierda sin importar si están asignados
-- o no algún valor

SELECT 
	E.nombre AS empleado,
    D.nombre AS departamentodepartamentos
FROM empleados E
LEFT JOIN departamentos D ON D.id = E.departamento_id;