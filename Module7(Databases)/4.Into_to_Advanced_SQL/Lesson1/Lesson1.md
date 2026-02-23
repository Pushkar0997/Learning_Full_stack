# Any

Any operator is used to compare a value to any value in a list or subquery. It returns true if the comparison is true for at least one of the values in the list or subquery.

- Select the brand, model and price from cars where the price is greater than the sold price of any car that was sold by Frankie Fender and the car has not been sold

```sql
SELECT brand, model, price FROM cars
  WHERE price > ANY (
    SELECT SC.sold_price FROM sold_cars SC
      JOIN staff S ON SC.seller = S.id
      WHERE S.name = 'Frankie Fender'
  ) AND sold IS FALSE;
```

If use the default join that means we are using the inner join, and the inner join will return only the rows that have a match in both tables. So if we use the inner join, we will get only the cars that have been sold by Frankie Fender and have a price greater than the sold price of any car that was sold by Frankie Fender.
Here in the above code, we are using the inner join to get the sold price of the cars that were sold by Frankie Fender, and then we are using the ANY operator to compare the price of the cars that have not been sold with the sold price of the cars that were sold by Frankie Fender.
Even if we use the left join, we will get the same result because we are filtering the cars that have not been sold, so we will get only the cars that have not been sold and have a price greater than the sold price of any car that was sold by Frankie Fender.
And there is a subquery in the above code that is used to get the sold price of the cars that were sold by Frankie Fender, and then we are using the ANY operator to compare the price of the cars that have not been sold with the sold price of the cars that were sold by Frankie Fender.

- Someone wants to buy a Volkswager can, which is cheaper than any of the ford cars

Select the brand, model and price where
* the price is lower than any Ford
* the brand is Volkswagen

```sql
SELECT brand, model, price FROM cars
  WHERE price < ANY (
    SELECT price FROM cars
      WHERE brand = 'Ford'
  ) AND brand = 'Volkswagen';
```
Here in the above code, we are using the ANY operator to compare the price of the Volkswagen cars with the price of the Ford cars. We are selecting the brand, model and price of the Volkswagen cars that have a price lower than any of the Ford cars.

- Has One sold one car that is worth more than the total sales of another salesperson?

Select the name, and sold price from the staff table, joined with sold_cars on matches between staff(id) and sold_cars(seller) Where the seller has sold a car for a price greater than any sum of a salesperson's total sales

```sql
SELECT S.name, SC.sold_price
  FROM staff S
  JOIN sold_cars SC ON S.id = SC.seller
WHERE SC.sold_price > ANY (
SELECT SUM(sold_price) FROM sold_cars
  GROUP BY seller
);
```
Here in the above code, we are using the ANY operator to compare the sold price of the cars that were sold by the staff with the total sales of the other salespersons. We are selecting the name and sold price of the staff who sold a car for a price greater than any sum of a salesperson's total sales.

- Do we have any cars that are worth more than a dealership's total sales?

Select the brand, model and price from cars Where the price of the car is greater than the total sales of any dealership

```sql
SELECT brand, model, price FROM cars 
  WHERE price > ANY (
    SELECT SUM(sold_price) FROM sold_cars
    JOIN staff ON staff.id = sold_cars.seller
      GROUP BY staff.dealership_id
  );
```
Here in the above code, we are using the ANY operator to compare the price of the cars with the total sales of the dealerships. We are selecting the brand, model and price of the cars that have a price greater than the total sales of any dealership. We are using a subquery to get the total sales of each dealership by joining the sold_cars table with the staff table and grouping by dealership_id.