# 4. What query would you run to get all the customers in store_id = 1 and inside these cities (1, 42, 312 and 459)? 
# Your query should return customer first name, last name, email, and address.

USE sakila;
SELECT customer.store_id, address.city_id, customer.first_name, customer.last_name, customer.email, address.address FROM customer
LEFT JOIN address ON customer.address_id = address.address_id
WHERE customer.store_id = 1 AND (address.city_id = 1 or address.city_id = 42 or address.city_id = 312 or address.city_id = 459);