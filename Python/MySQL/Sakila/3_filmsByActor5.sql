# 3. What query would you run to get all the films joined by actor_id=5? 
#  Your query should return the actor id, actor name, film title, description, and release year.

USE sakila;
SELECT actor.actor_id, CONCAT(actor.first_name, ' ', actor.last_name) AS actor_name, film_actor.film_id, film.title, film.description, film.release_year FROM actor
JOIN film_actor ON actor.actor_id = film_actor.actor_id
JOIN film ON film_actor.film_id = film.film_id
WHERE actor.actor_id = 5