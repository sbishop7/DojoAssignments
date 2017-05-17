# 5. What query would you run to get all the countries with Surface Area below 501 and Population greater than 100,000?

USE world;
SELECT name, surface_area, population FROM countries
WHERE surface_area < 501 AND population > 100000;