#  6. What query would you run to get all the actors that joined in the film_id = 369? 
#  Your query should return the film_id, title, actor_id, and actor_name.

USE sakila;
SELECT film.film_id, film.title, actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS actor_name FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE film.film_id = 369