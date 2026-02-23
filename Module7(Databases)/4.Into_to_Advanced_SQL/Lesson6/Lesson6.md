# Case in Update

The case expression can also be used in the update statement to update values based on certain conditions. The case expression allows us to evaluate a condition and return different values based on the result of that condition.

- Update the price of Aston Martin brand cars:
    * If the car is a DB5, increase the price by 15%
    * If the model is 'DB' followed by another single character, increase by 10%
    * Increase others by 5%  
Only update unsold cars

```sql
UPDATE cars
  SET price = price * CASE
  WHEN model = 'DB5' THEN 1.15
  WHEN model LIKE 'DB_' THEN 1.1
  ELSE 1.05
  END
WHERE sold IS FALSE
AND brand = 'Aston Martin';
```

Here in the above code, we are using the CASE expression in the UPDATE statement to evaluate the model of the Aston Martin cars and return different price increase percentages based on the model. We are updating the price of the unsold Aston Martin cars based on their model.

- Alter the price of cars:
    * For cars in Chicago, increase the price by 20%
    * For cars in Detroit, decrease the price by 20%
    * Any other car should keep the same price  
Only update unsold cars

Hint: you can use dealership_id in your update without a JOIN

```sql
UPDATE cars
  SET price = price * CASE
  WHEN dealership_id = 1 THEN 1.2
  WHEN dealership_id = 3 THEN 0.8
  ELSE 1.0
  END
WHERE sold IS FALSE;
```

Here in the above code, we are using the CASE expression in the UPDATE statement to evaluate the dealership_id of the cars and return different price increase or decrease percentages based on the dealership location. We are updating the price of the unsold cars based on their dealership location.