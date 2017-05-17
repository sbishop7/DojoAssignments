#  10. Write a single query that retrieves all the sites that each client owns. Group the results so that each row shows a new client. 
#  It will become clearer when you add a new field called 'sites' that has all the sites that the client owns. (HINT: use GROUP_CONCAT)

USE lead_gen_business;
SELECT concat(clients.first_name, ' ', clients.last_name) AS client_name, GROUP_CONCAT(domain_name SEPARATOR ' / ') AS sites FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
GROUP By clients.client_id