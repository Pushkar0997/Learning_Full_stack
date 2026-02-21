# Populating Tables with Data
In the previous lessons, we have created tables for our car dealership database. Now we will learn how to insert data into those tables. We will also learn how to query data from multiple tables together using JOINs.

## Inserting in Dealerships table
```sql
INSERT INTO dealerships ( city, state, established )
	VALUES
	( 'Chicago', 'IL', '2022-04-14' ),
	( 'Atlanta', 'GA', '2022-04-14' ),
	( 'Detroit', 'MI', '2022-04-14' ),
	( 'Philadelphia', 'PA', '2026-07-01');
```

## Inserting in staff table
```sql
INSERT INTO staff ( dealership_id, name, role )
	VALUES 
	(1, 'Rodney Ride', 'CEO'),
	(1, 'Penny Piston', 'Accountant'),
	(1, 'Rhonda Rules', 'HR Officer'),
	(1, 'Nina Nitro', 'Salesperson'),
	(1, 'Frankie Fender', 'Salesperson'),
	(1, 'Mike Anic', 'Mechanic'),
	(1, 'Meg A Byte', 'Data Administrator');
```