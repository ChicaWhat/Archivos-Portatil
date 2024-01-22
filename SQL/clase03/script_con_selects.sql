#CONSULTAS
## A una sola tabla

#todos los campos de todos los usuarios
SELECT * FROM usuarios;

##Algunos campos de todos los usuarios
SELECT nombre, apellido, email FROM usuarios;

##Algunos campos de todos los usuarios de acuerdo a una condicion
SELECT nombre, apellido, email FROM usuarios WHERE  nombre = 'baneado';

SELECT nombre, apellido, email FROM usuarios WHERE  nombre = 'baneado' OR role = 'admin';
## El AND tambien sirve


SELECT * FROM mecanicos;

##A más de una tabla
## mostrar nro de emplado y nombre del mecanico y la marca y la patente del bus

SELECT mecanicos.nro_empleado, mecanicos.nombre, bus.marca, bus.patente
FROM mecanicos, bus
WHERE mecanicos.id_bus = bus.id; #emparejamiento --> decirle a las tablas como se conectan entre ellas


