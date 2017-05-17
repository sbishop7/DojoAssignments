# 4. What query would you run to get total # of sites created per month per year for the client with an id of 1? What about for client=20?

USE lead_gen_business;

SELECT client_id, count(domain_name) AS number_of_websites, MONTHNAME(created_datetime) AS month_created, YEAR(created_datetime) AS year_created FROM sites
WHERE client_id = 1
GROUP BY YEAR(created_datetime), MONTHNAME(created_datetime);

SELECT client_id, count(domain_name) AS number_of_websites, MONTHNAME(created_datetime) AS month_created, YEAR(created_datetime) AS year_created FROM sites
WHERE client_id = 20
GROUP BY YEAR(created_datetime), MONTHNAME(created_datetime);