#CRUD
## CREATE READ UPDATE DELETE

# CREATE
#todas las variantes que hemos creado

#READ
SELECT * FROM usuarios;

#UPDATE --> me permite modificar una serie de datos dentro de una tabla

UPDATE usuarios
SET role = 'admin'
WHERE id=1 OR id=2;

UPDATE usuarios
SET isBanned = TRUE, nombre = 'baneado', apellido = 'sos un groso'
WHERE email = 'salva@gmail.com';

##DELETE --> fisico
## MISMO CUIDAO CON EL UPDATE, HAY QUE PONER SIEMPRE EL WHERE

DELETE FROM usuarios
WHERE email = 'fernando@gmail.com';

#DELETE --> lógico --> es un UPDATE

UPDATE usuarios
SET isDeleted=true
WHERE email='juan@gmail.com';

#MOSTRAR TODOS LOS USUARIOS MENOS LOS QUE ESTÉN ''BORRADOS''
SELECT * FROM usuarios WHERE isDeleted = false;


