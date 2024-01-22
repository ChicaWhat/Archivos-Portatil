CREATE TABLE user (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    edad INT NOT NULL,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO user (name, edad, email) VALUES ('Oscar', 25, 'oscar@gmail.com');
INSERT INTO user (name, edad, email) VALUES ('Layla', 15, 'layla@gmail.com');
INSERT INTO user (name, edad, email) VALUES ('Nicolas', 36, 'nico@gmail.com');
INSERT INTO user (name, edad, email) VALUES ('Chanchito', 7, 'chanchito@gmail.com');

SELECT * FROM user;
-- Encuentra SOLO al id con valor 1
SELECT * FROM user LIMIT 1; 
-- Encuentra todos los id que tengan una edad > 15
SELECT * FROM user WHERE edad > 15;
-- Encuentra todos los id que tengan una edad igual o > 15
SELECT * FROM user WHERE edad >= 15;
-- Encuentra la id que tenga una edad > 20 Y que contenga el email escrito
SELECT * FROM user WHERE edad > 20 AND email = 'nico@gmail.com';
-- Encuentra las id que tengan una edad > 20 O la id que contenga dicho email.
-- LO MUESTRA TODO JUNTO, DEBIDO A ESE 'OR'
SELECT * FROM user WHERE edad > 20 OR email = 'layla@gmail.com';
-- Encuentra todas las id que NO tengan dicho email
SELECT * FROM user WHERE email != 'layla@gmail.com';
-- Encuentra las id que estén entre ese rango de edad
SELECT * FROM user WHERE edad BETWEEN 15 AND 30;
-- Encuentra en la cadena de email todos los campos que contengan el registre GMAIL, sin importar lo que ponga delante
-- Esto se consigue añadiendo el símbolo de '%' delante y detrás de lo que queramos buscar
SELECT * FROM user WHERE email LIKE '%gmail%';
-- En este caso, usando solo '%' delante, significa que dicha palabra termina ahí,  no contiene más info atrás
SELECT * FROM user WHERE email LIKE '%gmail';
-- Buscará el email que empiece por 'oscar' sin importar lo que le siga
SELECT * FROM user WHERE email LIKE 'oscar%';
-- Ordena los resultados encontrados en edad de forma ASCENDENTE
SELECT * FROM user ORDER BY edad ASC;
-- Ordena los resultados encontrados de forma DESCENDENTE
SELECT * FROM user ORDER BY edad DESC;
-- Señala el selector que tenga la edad mayor
SELECT MAX(edad) AS mayor FROM user;
-- Señala la menor edad
-- Con 'AS' se puede crear una frase o cambiar el valor del nombre de la columna
SELECT MIN(edad) AS menor FROM user;
-- Se puede llamar también SOLO a una columna
SELECT id, name FROM user;
-- Se cambió name a chachitos
SELECT id, name AS chanchitos FROM user;














