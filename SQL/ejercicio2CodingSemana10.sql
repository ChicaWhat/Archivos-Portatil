USE sakila;

-- Actores que contentan la letra O en su nombre Y la letra A en su apellido
SELECT first_name, last_name FROM actor WHERE first_name LIKE "%O%" AND last_name LIKE "%A%";

-- Duración media de todas las películas.
SELECT AVG(length) FROM film;

-- Películas con un rating PG y duración de más de 120.
SELECT rating, length FROM film WHERE rating = 'PG' AND length > 120;

-- Número total de apellidos distintos entre todos los actores.
SELECT DISTINCT last_name FROM actor;
SELECT COUNT(last_name), last_name FROM actor GROUP BY last_name;
-- Este no se hacerlo!!

SELECT count(last_name) AS Apellido FROM actor
GROUP BY last_name HAVING count(last_name) = 1;

-- Ciudad en la que vive el cliente "Sandra Martin" (utilizando JOIN).
SELECT concat(cu.first_name, " ", last_name), ci.city
FROM customer cu
JOIN city ci ON ci.city_id = cu.customer_id
WHERE first_name = "Sandra" AND last_name = "Martin";
