# 8. What query would you run to summarize the number of countries in each region? 
#		The query should display the name of the region and the number of countries. 
#		Also, the query should arrange the result by the number of countries in descending order.

USE world;
SELECT region, count(name) AS countries FROM countries
GROUP BY region
ORDER BY count(name) DESC;