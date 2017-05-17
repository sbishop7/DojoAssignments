#  9. Write a single query that retrieves total revenue collected from each client for each month of the year. Order it by client id.

USE lead_gen_business;
SELECT concat(clients.first_name, ' ', clients.last_name) AS client_name, billing.amount as Total_Revenue, MONTHNAME(billing.charged_datetime) as month_charge, YEAR(billing.charged_datetime) AS year_charge FROM clients
LEFT JOIN billing ON clients.client_ID = billing.client_id
GROUP BY clients.client_id, YEAR(billing.charged_datetime), MONTHNAME(billing.charged_datetime)
ORDER BY clients.client_id, billing.charged_datetime;

