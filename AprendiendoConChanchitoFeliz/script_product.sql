CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    created_by INT NOT NULL,
    marca VARCHAR(50) NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(created_by) REFERENCES user(id)

);

-- Cambiarle el nombre a la tabla
RENAME TABLE products TO product;

INSERT INTO product (name, created_by, marca) 
VALUES ('iPad', 1, 'apple'),
		('iPhone', 1, 'apple'),
		('watch', 2, 'apple'),
        ('macbook', 1, 'apple'),
        ('iMac', 3, 'apple'),
        ('iPad mini', 2, 'apple');
        
SELECT * FROM product;