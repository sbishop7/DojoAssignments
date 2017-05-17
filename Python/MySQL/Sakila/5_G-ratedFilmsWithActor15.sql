# 5. What query would you run to get all the films with a "rating = G" and "special feature = behind the scenes", joined by actor_id = 15? 
#  Your query should return the film title, description, release year, rating, and special feature. 
#  Hint: You may use LIKE function in getting the 'behind the scenes' part.

USE sakila;
SELECT film.title, film.description, film.release_year, film.rating, film.special_features, film_actor.actor_id FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
WHERE film.rating = 'G' AND film_actor.actor_id = 15 AND film.special_features LIKE '%behind the scenes%'