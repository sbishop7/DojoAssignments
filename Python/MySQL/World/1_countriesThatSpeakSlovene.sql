# 1. What query would you run to get all the countries that speak Slovene? 
# Your query should return the name of the country, language and language percentage. 
# Your query should arrange the result by language percentage in descending order.

USE world;
SELECT countries.name, languages.language, languages.percentage FROM countries
JOIN languages ON languages.country_id = countries.id
WHERE languages.language = 'Slovene'