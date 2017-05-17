# 3. What query would you run to get all the cities in Mexico with a population of greater than 500,000? 
#      Your query should arrange the result by population in descending order. (1)

USE world;
SELECT cities.name, cities.population FROM cities
JOIN countries ON cities.country_id = countries.id
WHERE countries.name = 'Mexico' AND cities.population > 500000
ORDER BY cities.population DESC;