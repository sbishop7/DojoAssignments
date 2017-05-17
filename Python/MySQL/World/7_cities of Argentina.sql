# 7. What query would you run to get all the cities of Argentina inside the Buenos Aires district and have the population greater than 500, 000? 
#      The query should return the Country Name, City Name, District and Population.

USE world;
SELECT countries.name AS country, cities.name AS city, cities.district, cities.population FROM cities
JOIN countries ON cities.country_ID = countries.id
WHERE countries.name = 'Argentina' AND cities.district = 'Buenos Aires' AND cities.population > 500000