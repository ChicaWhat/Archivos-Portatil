-- Creamos la base de datos
CREATE DATABASE IF NOT EXISTS championship;

-- Seleccionamos la base de datos
USE championship;

-- Borramos las tablas.
DROP TABLE IF EXISTS teamMatches, matches, players, teams;

-- Creamos la tabla de equipos
CREATE TABLE IF NOT EXISTS teams (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    sponsor VARCHAR(50),
    colorA VARCHAR(30) NOT NULL,
    colorB VARCHAR(30) NOT NULL,
    category ENUM("sub-18", "senior") NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP 

);

-- Creamos la tabla de jugadores
CREATE TABLE IF NOT EXISTS players (
	id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    teamId INT UNSIGNED NOT NULL,
    firstName VARCHAR(30) NOT NULL, 
    lastName VARCHAR(50) NOT NULL,
    birthDate DATETIME NOT NULL,
    addres VARCHAR(100),
    phone VARCHAR(20),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (teamId) REFERENCES teams (id) ON DELETE CASCADE

);

-- Creamos la tabla de jugadores
CREATE TABLE IF NOT EXISTS matches (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    field VARCHAR(50) NOT NULL,
    result VARCHAR(5) DEFAULT '0-0',
    inicdences TEXT,
    referee VARCHAR(30) NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP

);

-- Creamos la tabla intermedia
CREATE TABLE IF NOT EXISTS teamMatches (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    localTeamId INT UNSIGNED NOT NULL,
    visitingTeamId INT UNSIGNED NOT NULL,
    matchId INT UNSIGNED NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (localTeamId) REFERENCES teams (id),
    FOREIGN KEY (visitingTeamId) REFERENCES teams (id),
    FOREIGN KEY (matchId) REFERENCES matches (id)

);

-- Insertamos dos equipos
INSERT INTO teams (name, colorA, colorB, category)
VALUES 
	('Equipo A', 'Azul', 'Blanco', 'sub-18'),
	('Equipo B', 'Rojo', 'Violeta', 'sub-18');

-- Insertamos cuatro jugadores
INSERT INTO players (firstName, lastName, birthDate, teamId)
VALUES
	('Sara', 'Rodriguez', '2008-10-05', 1),
    ('Pablo', 'Rodriguez', '2009-05-05', 1),
    ('Lucía', 'Rodriguez', '2003-07-10', 2),
    ('Manu', 'Pérez', '2008-10-05', 2);

-- Insertamos un partido
INSERT INTO matches (field, referee)
VALUES 
	('Anxo Carro', 'Pedrerol');
    
-- Enfrentamos al equipo A y al B
INSERT INTO teamMatches (localTeamId, visitingTeamId, matchId)
VALUES (1, 2, 1);

-- Modificamos el resultado del partido
UPDATE matches SET result = '1-2' WHERE id = 1;

-- Eliminamos el atributo apellido de la tabla jugadores
ALTER TABLE players DROP COLUMN lastName;

-- Modifica el nombre de la columna teléfono en la tabla de jugadores
ALTER TABLE players RENAME COLUMN phone TO  tel;

-- Modifica el nombre y el teléfono del jugador con id 2
UPDATE players SET firstName = 'María', tel = '111222333' WHERE id = 2;

-- Eliminamos un jugador de cada equipo
DELETE FROM players WHERE id = 1 OR id = 3;








