#  3. What query would you run to get all the sites that client=10 owns?

USE lead_gen_business;
SELECT domain_name AS website, client_id FROM sites
WHERE client_id = 10;