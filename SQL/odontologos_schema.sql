CREATE DATABASE  IF NOT EXISTS odontologos;
USE odontologos;

DROP TABLE IF EXISTS obrasocial;
CREATE TABLE obrasocial (
  id_obrasocial int NOT NULL,
  nombre varchar(45) NOT NULL,
  direccion varchar(45) DEFAULT NULL,
  telefono varchar(45) DEFAULT NULL,
  PRIMARY KEY (id_obrasocial)
);

INSERT INTO obrasocial VALUES (125,'PAMI','Av. Gral. Paz 215','244556'),
(133,'APROSS','Av. Figueroa Alcorta 566','332122'),(233,'PARTICULAR',NULL,NULL),
(406,'OSPIA','Av. Colon 456','235568'),(694,'DASPU','Av. Valparaiso 368','336654'),
(771,'OSTEL','25 de Mayo 120','246689');

DROP TABLE IF EXISTS odontologos;
CREATE TABLE odontologos (
  id_odontologo int NOT NULL,
  nombre varchar(45) NOT NULL,
  apellido varchar(45) NOT NULL,
  direccion varchar(45) DEFAULT NULL,
  telefono varchar(45) DEFAULT NULL,
  PRIMARY KEY (id_odontologo)
);

INSERT INTO odontologos VALUES (1128,'Perez','Martin','Colon 3566','4806654'),
(1197,'Mariani','Ana','Av. Patria 511','4529983'),(1283,'Matzin','Juan','Juan B. Justop 1255','4718855'),
(6831,'Udzick','Jose','Belgrano 456 Dto E','4223566');

DROP TABLE IF EXISTS pacientes;
CREATE TABLE pacientes (
  id_paciente int NOT NULL,
  dni varchar(45) NOT NULL,
  nombre varchar(45) DEFAULT NULL,
  apellido varchar(45) DEFAULT NULL,
  direccion varchar(100) DEFAULT NULL,
  id_obrasocial int NOT NULL,
  PRIMARY KEY (id_paciente),
  FOREIGN KEY (id_obrasocial) REFERENCES obrasocial(id_obrasocial)
);

INSERT INTO pacientes VALUES (103,'23129486','Jose','Torres','Lamadrid 306',125),
(129,'19465886','Juan','Palacios','Jjuy 3506',233),(405,'19668910','Marisa','Anchorena','Colon 405 dto3',694),
(603,'63316876','Beatriz','Moretti','Anacreonte 1122',771),(917,'33113216','Martin','Garcia','Urquiza 2566',125),
(966,'17455128','Dario','Sosa','Baigorri 53',133),(1505,'18495688','Andrea','Zarate','Estados Unidos 36',406);

DROP TABLE IF EXISTS practicas;
CREATE TABLE practicas (
  id_practica int NOT NULL,
  nombre varchar(45) NOT NULL UNIQUE,
  precio decimal(10,0) NOT NULL,
  PRIMARY KEY (`id_practica`)
);

INSERT INTO practicas VALUES (1233,'limpieza dental',25),(1456,'arreglo simple',35),(4457,'cirugia',420),
(4698,'trat. de conducto simple',150),(6566,'trat. de conducto doble',235),(6654,'extraccion',70),
(9841,'consulta',15);

DROP TABLE IF EXISTS cobertura;
CREATE TABLE cobertura (
  id_cobertura int NOT NULL,
  id_obrasocial int NOT NULL,
  id_practica int NOT NULL,
  cobertura decimal(10,0) NOT NULL,
  PRIMARY KEY (id_cobertura),
  FOREIGN KEY (id_obrasocial) REFERENCES obrasocial(id_obrasocial),
  FOREIGN KEY (id_practica) REFERENCES practicas(id_practica)
);

INSERT INTO cobertura VALUES (1,125,1233,15),(2,125,6654,18),(3,125,4698,23),(4,125,6566,50),
(5,125,1456,50),(6,125,9841,100),(7,125,4457,100),(8,133,1233,25),(9,133,6654,23),(10,133,4698,100),
(11,133,6566,25),(12,133,1456,50),(13,133,9841,50),(14,133,4457,25),(15,406,1233,70),(16,406,6654,80),
(17,406,4698,60),(18,406,6566,50),(19,406,1456,100),(20,406,9841,100),(21,406,4457,25),(22,771,1233,10),
(23,771,6654,25),(24,771,4698,25),(25,771,6566,50),(26,771,1456,50),(27,771,9841,100),(28,771,4457,100),
(29,233,1233,50),(30,233,6654,50),(31,233,4698,50),(32,233,6566,50),(33,233,1456,80),(34,233,9841,80),
(35,233,4457,100),(36,694,1233,30),(37,694,6654,25),(38,694,4698,25),(39,694,6566,25),(40,694,1456,50),
(41,694,9841,50),(42,694,4457,100);

DROP TABLE IF EXISTS consultas;
CREATE TABLE consultas (
  id_consulta int NOT NULL AUTO_INCREMENT,
  fecha date NOT NULL,
  id_paciente int NOT NULL,
  id_practica int NOT NULL,
  id_odontologo int NOT NULL,
  PRIMARY KEY (id_consulta),
  FOREIGN KEY (id_paciente) REFERENCES pacientes(id_paciente),
  FOREIGN KEY (id_practica) REFERENCES practicas(id_practica),
  FOREIGN KEY (id_odontologo) REFERENCES odontologos(id_odontologo)
);

INSERT INTO consultas VALUES (123,'2021-12-12',917,1233,6831),(124,'2022-06-25',1505,6654,1283),
(125,'2021-07-30',603,1233,6831),(126,'2021-08-21',917,4698,6831),(127,'2021-08-05',129,4698,1197),
(128,'2021-08-15',603,6566,1283),(129,'2021-09-03',103,1233,1128),(130,'2021-09-10',917,9841,6831),
(131,'2021-10-12',966,4457,1197),(132,'2021-11-03',917,4457,1283),(133,'2021-11-06',1505,4698,1283),
(134,'2021-11-10',917,4698,6831),(135,'2021-11-10',603,6566,6831),(136,'2021-11-10',405,9841,1128);