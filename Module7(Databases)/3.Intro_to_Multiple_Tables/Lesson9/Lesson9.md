# Aggregrates

Here we will look in how to use aggregates with joins. We will be using the same tables as before, but we will be looking at how to use aggregates to get some insights from the data.

- Select the city and average car price Round that car price to a whole number Only show dealerships which have cars Group by dealership city and state

```sql
SELECT city, state, ROUND(AVG(price), 2) AS avg_price
	FROM cars
	INNER JOIN dealerships D ON dealership_id = D.id
    GROUP BY city, state;
```
Here both Inner Join And Left Join will give the same result as we are only looking for dealerships which have cars, so there is no need to use Full Join here.  

In the code above we are selecting the city and state from the dealerships table and the average price of cars from the cars table. We are using an INNER JOIN to join the cars table with the dealerships table on the dealership_id. We are then grouping the results by city and state to get the average price for each dealership location. The ROUND function is used to round the average price to 2 decimal places.

- Select the name and role, alongside a total_sales:
	this is the sum of sales by a member of staff, Use staff as your left table and sold_cars as your right table Include a where clause to select only staff with the role 'Salesperson'  
	Group by staff name and role
	Order by the total_sales from high to low

```sql
SELECT name, role, SUM(sold_price) AS total_sales
	FROM staff S
	LEFT JOIN sold_cars ON S.id = seller
WHERE role = 'Salesperson'
GROUP BY name, role
ORDER BY total_sales DESC;
```
In this SQL command, we are selecting the name and role from the staff table and calculating the total sales by summing the sold_price from the sold_cars table. We are using a LEFT JOIN to join the staff table with the sold_cars table on the staff id and seller. We are filtering the results to include only staff members with the role of 'Salesperson'. We then group the results by name and role to get the total sales for each salesperson, and finally, we order the results by total_sales in descending order to show the highest sales first.

If we use an INNER JOIN instead of a LEFT JOIN, we will only get the salespeople who have made sales, while with a LEFT JOIN, we will get all salespeople, including those who haven't made any sales, with NULL values for total_sales for those who haven't made sales. And similarly, if we use a FULL JOIN, we will get all staff members, including those who are not salespeople, with NULL values for total_sales for those who are not salespeople. And for RIGHT JOIN, we will get all records from sold_cars and the matching records from staff, which is not what we want in this case.

- How many unsold cars are there in each dealership?  
Select the city, state and count the total number of cars in each dealership alias the count as car_count Use cars as the left table, and dealerships as the right table choosing a join which will show every dealership Include a condition to count unsold cars    

	Group by dealership city and state
	Order by the car_count

```sql
SELECT city, state, COUNT(C.id) AS car_count
	FROM cars C
	RIGHT JOIN dealerships D ON dealership_id = D.id
WHERE sold IS NOT TRUE
GROUP BY city, state
ORDER BY car_count;
```
In this SQL command, we are selecting the city and state from the dealerships table and counting the total number of unsold cars from the cars table. We are using a RIGHT JOIN to join the cars table with the dealerships table on the dealership_id. This ensures that we get all dealerships, even those that have no cars. We are filtering the results to include only unsold cars by checking if the sold column is not true. We then group the results by city and state to get the count of unsold cars for each dealership location, and finally, we order the results by car_count in ascending order to show the dealerships with the fewest unsold cars first.
