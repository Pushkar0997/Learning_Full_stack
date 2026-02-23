# Joining Multiple Tables

WE will do so by chaining together multiple `JOIN` statements.

- List of sold cars, with the seller's name, city and the date of the sale.

List:  
	- the brand and model of cars  
	- include the name of the seller,  
	- the city they work in  
	- the date of the sale  
	
Format the sold_date as DD-MM-YYYY using TO_CHAR()
	Use sold_cars as the left table and join other tables
	show sold_cars when we have no record of the seller

```sql
SELECT
	C.brand,
	C.model,
	S.name AS seller_name,
	D.city,
	TO_CHAR(SC.sold_date, 'DD-MM-YYYY') AS date_of_sale
FROM sold_cars SC
	INNER JOIN cars C ON SC.cars_id = C.id
	LEFT JOIN staff S ON SC.seller = S.id
	LEFT JOIN dealerships D ON S.dealership_id = D.id;
```
Here, we are selecting the brand and model of cars from the cars table, the name of the seller from the staff table, the city from the dealerships table, and formatting the sold_date from the sold_cars table. We are using an INNER JOIN to join sold_cars with cars to get the car details, a LEFT JOIN to join sold_cars with staff to get the seller's name (which allows for NULL values if there is no matching seller), and another LEFT JOIN to join staff with dealerships to get the city (which also allows for NULL values if there is no matching dealership). This way, we will show all sold cars even if we have no record of the seller or their dealership.

- List the staff people who haven't made any sales.

Select the name, role and city from sold_cars Join with the staff and dealerships tables use appropriate joins to show staff who have no dealership_id Include a where clause to find
    - null values in sold_cars
    - staff who have the role 'Salesperson'

```sql
SELECT
	S.name,
	S.role,
	D.city
FROM sold_cars SC
	FULL JOIN staff S ON SC.seller = S.id
	LEFT JOIN dealerships D ON S.dealership_id = D.id
WHERE SC.id IS NULL
	AND S.role = 'Salesperson';
```
In this SQL command, we are selecting the name and role from the staff table and the city from the dealerships table. We are using a FULL JOIN to join sold_cars with staff to include all staff members, even those who haven't made any sales (which will have NULL values in sold_cars). We then use a LEFT JOIN to join staff with dealerships to get the city, allowing for NULL values if there is no matching dealership. Finally, we filter the results to include only those records where the sold_cars id is NULL (indicating no sales) and where the staff role is 'Salesperson'. This will give us a list of salespeople who haven't made any sales along with their city if available.

- How many cars have been sold by each dealership?

Show the city and state of dealerships with a count of the cars sold aliased as cars_sold Select from sold_cars
join with the relevant tables Include dealerships which have no sold cars Order the count in descending order

Hint: you may need to join using a table not included in our columns

```sql
SELECT
	D.city,
	D.state,
	COUNT(SC.id) AS cars_sold
FROM sold_cars SC
	LEFT JOIN cars C ON SC.cars_id = C.id
	RIGHT JOIN dealerships D ON C.dealership_id = D.id
GROUP BY D.city, D.state
ORDER BY cars_sold DESC;
```
In this SQL command, we are selecting the city and state from the dealerships table and counting the number of cars sold from the sold_cars table. We are using a LEFT JOIN to join sold_cars with cars to get the car details, and a RIGHT JOIN to join cars with dealerships to ensure that we include all dealerships, even those that have no sold cars (which will have NULL values in sold_cars). We then group the results by city and state to get the count of cars sold for each dealership location, and finally, we order the results by cars_sold in descending order to show the dealerships with the most sales first.