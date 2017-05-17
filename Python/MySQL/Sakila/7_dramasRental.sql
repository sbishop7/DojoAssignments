# 7. What query would you run to get all drama films with a rental rate of 2.99? 
#    Your query should return film title, description, release year, rating, special features, and genre (category).

USE sakila;
SELECT film.film_id, film.title, film.description, film.release_year, film.special_features, category.name AS genre, film.rental_rate FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE film.rental_rate = 2.99 AND category.name = 'Drama'