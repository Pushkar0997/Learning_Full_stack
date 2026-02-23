# Case in Select Statements

Case statements are used to create conditional expressions in SQL. They allow you to evaluate a condition and return different values based on the result of that condition.

They are similar to if-else statements in programming languages. The syntax for a case statement is as follows:

- Select the brand, model, condition from cars
Based on the car's condition level, output the following:
* 'Excellent' when 4 or greater
* 'Fair' when 3 or greater
* 'Poor' when 1 or greater
* 'Wrecked' for all other cases

Aliased as 'condition label'
From cars
Order by the condition in descending order

```sql
SELECT brand, model, condition, 
  CASE
    WHEN condition >= 4 THEN 'Excellent'
    WHEN condition >= 3 THEN 'Fair'
    WHEN condition >= 1 THEN 'Poor'
    ELSE 'Wrecked'
  END AS condition_label
  FROM cars
  ORDER BY condition DESC;
```

Here in the above code, we are using the CASE statement to evaluate the condition of the cars and return a label based on the condition level. We are selecting the brand, model, condition and the condition label of the cars and ordering the results by condition in descending order.

- Rodney is assigning bonuses for his staff on the following terms:
- Salespeople who have made more than $100,000 in sales receive $10,000
- Salespeople who have made more than $75,000 in sales receive $5,000
- Every other staff member gets a bonus of $1,000

Select from the sold_cars table, joined with staff where
sold_cars(seller) = staff(id)
Show all staff, even if they have made no sales

Select:
* staff(name)
* staff(role)
* staff(dealership_id)
* the sum of the staff member's sales - alias as total_sales

Use CASE to select the correct value, as defined above, aliased as bonus

Use GROUP BY to format the output, and ORDER BY bonus then dealership_id

```sql
SELECT S.name, S.role, S.dealership_id,
  SUM(SC.sold_price) AS total_sales,
  CASE
		WHEN SUM(SC.sold_price) >= 100000 THEN 10000
		WHEN SUM(SC.sold_price) >= 75000 THEN 5000
		ELSE 1000
	END AS bonus
  FROM sold_cars SC
  RIGHT JOIN staff S ON SC.seller = S.id
  GROUP BY (S.name, S.role, S.dealership_id)
  ORDER BY bonus, dealership_id;
```
Here in the above code, we are using the CASE statement to evaluate the total sales of each staff member and return a bonus based on the total sales. We are selecting the name, role, dealership_id, total_sales and bonus of the staff members and ordering the results by bonus and dealership_id. We are using a RIGHT JOIN to show all staff members, even if they have made no sales, and we are grouping the results by name, role and dealership_id to get the total sales for each staff member.