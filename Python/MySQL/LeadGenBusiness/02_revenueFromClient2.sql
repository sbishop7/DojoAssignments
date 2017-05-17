#  2. What query would you run to get total revenue collected from the client with an id of 2?

USE lead_gen_business;
SELECT billing.client_id, sum(amount) AS total_revenue FROM billing
WHERE client_id = 2;