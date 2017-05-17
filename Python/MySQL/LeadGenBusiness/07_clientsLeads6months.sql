#  7. What query would you run to get a list of client names and the total # of leads we've generated
#  for each client each month between months 1 - 6 of Year 2011?

USE lead_gen_business;
SELECT concat(clients.first_name, ' ', clients.last_name) AS client_name, count(leads.leads_id) AS number_of_leads, MONTHNAME(leads.registered_datetime) AS month_generated FROM clients
LEFT JOIN sites ON clients.client_ID = sites.client_id
LEFT JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime BETWEEN '2011/1/1' AND '2011/6/30'
GROUP BY clients.client_ID, MONTHNAME(leads.registered_datetime)
ORDER BY leads.registered_datetime ASC;