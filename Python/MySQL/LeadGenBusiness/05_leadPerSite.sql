#  5. What query would you run to get the total # of leads generated for each of the sites between January 1, 2011 to February 15, 2011?

USE lead_gen_business;
SELECT domain_name AS website, count(leads.leads_id), concat(MONTHNAME(leads.registered_datetime), ' ', DAY(leads.registered_datetime), ', ', YEAR(leads.registered_datetime)) AS date_generated FROM sites
JOIN leads ON sites.site_id = leads.site_id
WHERE leads.registered_datetime BETWEEN '2011/1/1' AND '2011/2/15'
GROUP BY sites.domain_name;