#2. What query would you run to display the total number of cities for each country? 
# Your query should return the name of the country and the total number of cities. 
# Your query should arrange the result by the number of cities in descending order.

USE world;
SELECT countries.name, count(cities.id) AS cities FROM countries
LEFT JOIN cities ON cities.country_id = countries.id
GROUP BY countries.name;