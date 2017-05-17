#  2.  What query would you run to get all comedy films? 
#  Your query should return film title, description, release year, rating, special features, and genre (category).


USE sakila;
SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre FROM film
JOIN film_category ON film.film_id = film_category.film_id
JOIN category on film_category.category_id = category.category_id
WHERE category.name = 'Comedy'