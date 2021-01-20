-- Dummy data for dev purposes

TRUNCATE TABLE category CASCADE;
INSERT INTO category (name) VALUES ('Skirts'), ('T-shirts'), ('Coats');

TRUNCATE TABLE size CASCADE;
INSERT INTO size (symbol) VALUES ('S'), ('M'), ('L'), ('XL');

TRUNCATE TABLE product CASCADE;
INSERT INTO product (name, price, description, category_id, created_at, sale_percent) VALUES
('Skirt MARIA eko', 249.99, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat tincidunt augue, a semper justo placerat facilisis. Phasellus sed ornare nunc. Maecenas rhoncus accumsan nulla ac tempus. Pellentesque sapien nunc, sodales in sem pharetra, mattis porta sapien. Pellentesque magna quam, convallis eu nunc eu, hendrerit lobortis est. Aliquam elementum leo.', 1, '12-12-2020', 0),
('Skirt DIANA pro', 159.99, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat tincidunt augue, a semper justo placerat facilisis. Phasellus sed ornare nunc. Maecenas rhoncus accumsan nulla ac tempus. Pellentesque sapien nunc, sodales in sem pharetra, mattis porta sapien. Pellentesque magna quam, convallis eu nunc eu, hendrerit lobortis est. Aliquam elementum leo.', 1, '12-10-2020', 0),
('T-shirt ROUND white', 49.99, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat tincidunt augue, a semper justo placerat facilisis. Phasellus sed ornare nunc. Maecenas rhoncus accumsan nulla ac tempus. Pellentesque sapien nunc, sodales in sem pharetra, mattis porta sapien. Pellentesque magna quam, convallis eu nunc eu, hendrerit lobortis est. Aliquam elementum leo.', 2, '12-01-2021', 0),
('T-shirt MADAME black', 59.99, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat tincidunt augue, a semper justo placerat facilisis. Phasellus sed ornare nunc. Maecenas rhoncus accumsan nulla ac tempus. Pellentesque sapien nunc, sodales in sem pharetra, mattis porta sapien. Pellentesque magna quam, convallis eu nunc eu, hendrerit lobortis est. Aliquam elementum leo.', 2, '12-10-2020', 10),
('Coat BERMUDA brown', 359.99, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat tincidunt augue, a semper justo placerat facilisis. Phasellus sed ornare nunc. Maecenas rhoncus accumsan nulla ac tempus. Pellentesque sapien nunc, sodales in sem pharetra, mattis porta sapien. Pellentesque magna quam, convallis eu nunc eu, hendrerit lobortis est. Aliquam elementum leo.', 3, '12-01-2021', 0),
('Coat LUX black', 459.99, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam feugiat tincidunt augue, a semper justo placerat facilisis. Phasellus sed ornare nunc. Maecenas rhoncus accumsan nulla ac tempus. Pellentesque sapien nunc, sodales in sem pharetra, mattis porta sapien. Pellentesque magna quam, convallis eu nunc eu, hendrerit lobortis est. Aliquam elementum leo.', 3, '12-01-2021', 15);

TRUNCATE TABLE product_size CASCADE;
INSERT INTO product_size (product_id, size_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 3),
(2, 4),
(3, 1),
(3, 2),
(4, 2),
(4, 3),
(5, 1),
(6, 3);

