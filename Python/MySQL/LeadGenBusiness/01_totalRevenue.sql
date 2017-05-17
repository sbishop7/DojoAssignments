#  1. What query would you run to get the total revenue for March of 2012?

USE lead_gen_business;
SELECT MONTHNAME(charged_datetime) AS month, sum(amount) AS revenue FROM billing
WHERE YEAR(charged_datetime) = 2012 AND MONTHNAME(charged_datetime) = 'March';
