# All

The all operator is used to compare a value to all values in a list or subquery. It returns true if the comparison is true for all values in the list or subquery.

- Find the cars that are less expensive than all the cars in average condition

Select brand, model, condition and price from cars where the price is less than all cars which are in average condition (3)
```sql
SELECT brand, model, condition, price
  FROM cars
WHERE price < ALL (
  SELECT price FROM cars
    WHERE condition = 3
);
```
Here in the above code, we are using the ALL operator to compare the price of the cars with the price of the cars that are in average condition. We are selecting the brand, model, condition and price of the cars that have a price less than all the cars in average condition.

- Find the cars that are older than the Ford cars
Select the brand, model and year from cars Where the year is before all cars with a brand of 'Ford'
Order the results by year

```sql
SELECT brand, model, year FROM cars
  WHERE year < ALL (
    SELECT year FROM cars WHERE brand = 'Ford'
  )
ORDER BY year;
```
Here in the above code, we are using the ALL operator to compare the year of the cars with the year of the Ford cars. We are selecting the brand, model and year of the cars that have a year before all the Ford cars and ordering the results by year.

- Find the cars that are worth more than all the cars that were sold ever at Retro Rides

Select the brand, model, city, and price from cars joined with dealerships where cars(dealership_id) matches dealerships(id) where the price is greater than the price of all sold cars order the results by city

```sql
SELECT brand, model, city, price FROM cars
  JOIN dealerships ON dealership_id = dealerships.id
  WHERE price > ALL (
      SELECT sold_price FROM sold_cars
  )
ORDER BY city;
```
Here in the above code, we are using the ALL operator to compare the price of the cars with the price of all the cars that were sold at Retro Rides. We are selecting the brand, model, city and price of the cars that have a price greater than all the cars that were sold at Retro Rides and ordering the results by city.
