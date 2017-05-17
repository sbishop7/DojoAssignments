#  8. What query would you run to get all the action films which are joined by SANDRA KILMER? 
#  Your query should return film title, description, release year, rating, special features, genre (category), and actor's first name and last name.

USE sakila;
SELECT actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS actor_name, film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre FROM actor
JOIN film_actor ON actor.actor_id = film_actor.actor_id
JOIN film on film_actor.film_id = film.film_id
JOIN film_category ON film.film_id = film_category.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE actor.first_name = 'Sandra' AND actor.last_name = 'Kilmer' AND category.name = 'Action'