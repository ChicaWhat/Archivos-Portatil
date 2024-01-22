# 1 creo la base de datos
CREATE DATABASE mecanicos;

# 2 me posiciono en la base de datos
USE mecanicos;

# 3 empezamos a crear las tablas

# el UNSIGNED nos quita el símbolo negativo (-) en caso de haberlo
CREATE TABLE bus (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nro_interno VARCHAR(10) NOT NULL,
    marca VARCHAR(100),
    modelo VARCHAR(10),
    patente VARCHAR(20) NOT NULL
);

#cargar datos
#1er forma --> sin especificar los campos de la tabla
#Se deben pasar si o si TODOS LOS DATOS EN LOS VALUES SEAN O NO REQUERIDOS
#EN EL ORDEN EN EL QUE APARECEN EN LA ESTRUCTURA DE LA TABLA (id, nro_interno, marca... etc)

INSERT INTO bus VALUES (DEFAULT, '100', 'Iveco', '2000', 'BBAA123');

#2da forma:
#especificando los campos --> se deben nombrar y luego en los VALUES se deben pasar
#en el orden en el que se nombraron

INSERT INTO bus (id, nro_interno, patente) VALUES (DEFAULT, '101', 'BBCC120');

#Mostrar solamente marca, modelo y patente

SELECT marca, modelo, patente FROM bus;

#Mostrar todos los campos y todos los datos
SELECT * FROM bus;


CREATE TABLE mecanicos(
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nro_empleado VARCHAR(10) NOT NULL,
    nombre VARCHAR(100),
    direccion VARCHAR(100),
    telefono VARCHAR(50),
    id_bus INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_bus) REFERENCES bus(id)
);

INSERT INTO mecanicos VALUES (DEFAULT, '200', 'Juan', 'AA', '12345', 1),
							(DEFAULT, '201', 'Pedro', 'BB', '67895', 1),
                            (DEFAULT, '202', 'Dario', 'CC', '12334', 2),
                            (DEFAULT, '200', 'Hector', 'zz', '47892', 2);

SELECT * FROM mecanicos;

#alter (alteraciones en la estructura)
#agregar un campo en una tabla creada
ALTER TABLE mecanicos ADD apellido VARCHAR(50);

#modificar el TIPO de dato de un campo de una tabla creada
ALTER TABLE mecanicos MODIFY apellido VARCHAR(100);

#modificar el nombre de una columna ya creada
ALTER TABLE mecanicos RENAME COLUMN nombre TO name;

#eliminar una columna de una tabla creada
ALTER TABLE mecanicos DROP COLUMN apellido;






