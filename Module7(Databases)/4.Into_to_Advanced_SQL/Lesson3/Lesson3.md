# Exists

The exists operator is used to check if a subquery returns any rows. It returns true if the subquery returns at least one row, and false if it returns no rows.

- Select colors of car where there has been a sale of that color car

```sql
SELECT color FROM cars
  WHERE EXISTS (
    SELECT 1 FROM sold_cars WHERE cars_id = cars.id
  );
```
Here in the above code, we are using the EXISTS operator to check if there has been a sale of that color car. We are selecting the colors of the cars that have been sold at least once.

- To make it unique, we can use the DISTINCT keyword to get unique colors of cars that have been sold at least once.

```sql
SELECT DISTINCT color FROM cars
  WHERE EXISTS (
    SELECT 1 FROM sold_cars WHERE cars_id = cars.id
  )
  ORDER BY color;
``` 

- We can also use the NOT EXISTS operator to get the colors of the cars that have not been sold at least once.

```sql
SELECT DISTINCT color FROM cars
  WHERE NOT EXISTS (
    SELECT 1 FROM sold_cars WHERE cars_id = cars.id
  )
  ORDER BY color;
```

- Select the city, state and date established of dealerships
Where there are no existing cars in stock

Format the date in 'YYYY-MM-DD' format using TO_CHAR()
and alias it as 'est'

```sql
SELECT city, state, TO_CHAR(established, 'YYYY-MM-DD') AS est
  FROM dealerships D
  WHERE NOT EXISTS (
    SELECT 1 FROM cars WHERE dealership_id = D.id
  );
```
Here in the above code, we are using the NOT EXISTS operator to check if there are no existing cars in stock for each dealership. We are selecting the city, state and date established of the dealerships that have no cars in stock and formatting the date in 'YYYY-MM-DD' format using TO_CHAR() and aliasing it as 'est'.

- Select the city and state of dealerships
Where there exists a car priced at more than $50,000

Hint: you'll need to match cars(dealership_id) with dealerships(id) and then check for car price in your subquery

```sql
SELECT city, state
  FROM dealerships D
  WHERE EXISTS (
    SELECT 1 FROM cars C
      WHERE C.dealership_id = D.id AND C.price > 50000
  );
```
Here in the above code, we are using the EXISTS operator to check if there exists a car priced at more than $50,000 for each dealership. We are selecting the city and state of the dealerships that have at least one car priced at more than $50,000 by matching cars(dealership_id) with dealerships(id) and checking for car price in the subquery.

- Select the name of salespeople (role = 'Salesperson') who have not sold a car for more than $45,000

```sql
SELECT name FROM staff S
  WHERE role = 'Salesperson'
  AND NOT EXISTS (
    SELECT 1 FROM sold_cars SC
      WHERE SC.seller = s.id AND SC.sold_price > 45000
  );
```
Here in the above code, we are using the NOT EXISTS operator to check if there are no cars sold for more than $45,000 by each salesperson. We are selecting the name of the salespeople who have not sold a car for more than $45,000 by matching sold_cars(seller) with staff(id) and checking for sold_price in the subquery.

```sql
SELECT name FROM staff S
  WHERE role = 'Salesperson'
  AND NOT EXISTS (
    SELECT 1 FROM sold_cars SC
      WHERE SC.seller = s.id AND SC.sold_price > 45000
  ) AND EXISTS (
    SELECT 1 FROM sold_cars SC where seller = s.id
  );
```

Here in the above code, we are using both the NOT EXISTS and EXISTS operators to check if there are no cars sold for more than $45,000 by each salesperson and if there is at least one car sold by each salesperson. We are selecting the name of the salespeople who have not sold a car for more than $45,000 and have sold at least one car by matching sold_cars(seller) with staff(id) and checking for sold_price in the subquery.