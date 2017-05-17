#  8. What query would you run to get a list of client names and the total # of leads we've generated
#  for each of our clients' sites between January 1, 2011 to December 31, 2011? 
#  Order this query by client id.  Come up with a second query that shows all the clients, 
#  the site name(s), and the total number of leads generated from each site for all time.

USE lead_gen_business;
SELECT concat(clients.first_name, ' ', clients.last_name) AS client_name, sites.domain_name AS website, count(leads.leads_id) AS number_of_leads, concat(MONTHNAME(leads.registered_datetime), ' ', DAY(leads.registered_datetime), ', ', YEAR(leads.registered_datetime)) AS date_generated FROM clients
LEFT JOIN sites ON clients.client_ID = sites.client_id
LEFT JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime BETWEEN '2011/1/1' AND '2011/12/31'
GROUP BY leads.registered_datetime
ORDER BY clients.client_ID ASC;

USE lead_gen_business;
SELECT concat(clients.first_name, ' ', clients.last_name) AS client_name, sites.domain_name AS website, count(leads.leads_id) AS number_of_leads FROM clients
LEFT JOIN sites ON clients.client_ID = sites.client_id
LEFT JOIN leads ON sites.site_id = leads.site_id
GROUP BY sites.domain_name
ORDER BY clients.client_ID ASC;

