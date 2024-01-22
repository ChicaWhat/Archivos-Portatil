show databases;

USE holamundo;

CREATE TABLE animales (
	id INT,
    tipo VARCHAR(255),
    estado VARCHAR(255),
    PRIMARY KEY (id)

);

-- INSERT INTO animales (tipo, estado) VALUES ('chanchito', 'feliz');			

ALTER TABLE animales MODIFY COLUMN id INT AUTO_INCREMENT;

SHOW CREATE TABLE animales;

CREATE TABLE `animales` (
   `id` int NOT NULL AUTO_INCREMENT,
   `tipo` varchar(255) DEFAULT NULL,
   `estado` varchar(255) DEFAULT NULL,
   PRIMARY KEY (`id`)
 );
 
INSERT INTO animales (tipo, estado) VALUES ('chanchito', 'feliz');
INSERT INTO animales (tipo, estado) VALUES ('dragon', 'feliz');
INSERT INTO animales (tipo, estado) VALUES ('centauro', 'enfadado');

SELECT * FROM animales;
SELECT * FROM animales WHERE id = 9;
SELECT * FROM animales WHERE estado = 'triste' AND tipo = 'felipe';

UPDATE animales SET estado = 'triste' WHERE id = 10;

SELECT * FROM animales;

DELETE FROM animales WHERE id = 11;

SELECT * FROM animales;

UPDATE animales SET estado = 'triste' WHERE tipo = 'felipe';



 
 
 