# 4. What query would you run to get all languages in each country with a percentage greater than 89%? 
#      Your query should arrange the result by percentage in descending order.

USE world;
SELECT countries.name, languages.language, languages.percentage FROM languages
LEFT JOIN countries ON languages.country_id = countries.id
WHERE languages.percentage > 89
ORDER BY languages.percentage DESC;