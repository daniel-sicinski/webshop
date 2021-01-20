-- Webshop database schema

DROP TABLE IF EXISTS category CASCADE;
CREATE TABLE category(
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS size CASCADE;
CREATE TABLE size(
    size_id SERIAL PRIMARY KEY,
    symbol VARCHAR(20) NOT NULL
);

DROP TABLE IF EXISTS product CASCADE;
CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    description VARCHAR(2000),
    sale_percent INT,
    created_at TIMESTAMP NOT NULL,
    category_id INT REFERENCES category (category_id) ON DELETE CASCADE NOT NULL
);

DROP TABLE IF EXISTS product_size CASCADE;
CREATE TABLE product_size(
    product_id INT REFERENCES product (product_id) ON DELETE CASCADE NOT NULL,
    size_id INT REFERENCES size (size_id) ON DELETE CASCADE NOT NULL,
    PRIMARY KEY (product_id, size_id)
);

DROP TABLE IF EXISTS country CASCADE;
CREATE TABLE country(
    country_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS customer CASCADE;
CREATE TABLE customer(
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    address_1 VARCHAR(255) NOT NULL,
    address_2 VARCHAR(255),
    postal_code VARCHAR(20),
    city VARCHAR(50) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    emial VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    country_id INT NOT NULL REFERENCES country (country_id) ON DELETE CASCADE NOT NULL
);

DROP TABLE IF EXISTS customer_cart_line CASCADE;
CREATE TABLE customer_cart_line(
    product_id INT REFERENCES category (category_id) ON DELETE CASCADE NOT NULL,
    customer_id INT REFERENCES customer (customer_id) ON DELETE CASCADE NOT NULL,
    quantity INT NOT NULL,
    cart_line_num INT NOT NULL,
    PRIMARY KEY (product_id, customer_id)
);

DROP TABLE IF EXISTS shipping_type CASCADE;
CREATE TABLE shipping_type(
    shipping_type_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

DROP TABLE IF EXISTS product_order CASCADE;
CREATE TABLE product_order(
    product_order_id SERIAL PRIMARY KEY,
    order_date TIMESTAMPTZ NOT NULL,
    customer_id INT REFERENCES customer (customer_id) ON DELETE CASCADE NOT NULL,
    shipping_type_id INT REFERENCES shipping_type (shipping_type_id) ON DELETE CASCADE NOT NULL
);

DROP TABLE IF EXISTS order_line CASCADE;
CREATE TABLE order_line(
    product_id INT REFERENCES product (product_id) ON DELETE CASCADE NOT NULL,
    product_order_id INT REFERENCES product_order (product_order_id) ON DELETE CASCADE NOT NULL,
    quantity INT NOT NULL,
    order_line_num INT NOT NULL,
    price_each NUMERIC(10,2) NOT NULL,
    PRIMARY KEY (product_id, product_order_id)
);