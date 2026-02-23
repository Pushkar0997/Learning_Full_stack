# Case Challenges

- Select the city and a count of sales of a dealership
Categorise the dealership's performance:
    * If the count of sales >= 10 output 'Outperforming'
    * If the count of sales >= 5 output 'Meeting targets'
    * If the count of sales >= 1 output 'Underperforming'
    * Otherwise, output 'No sales'

Order by total sales in descending order

```sql
SELECT
  D.city,
  COUNT(sc.id) AS total_sales,
	CASE
		WHEN COUNT(sc.id) >= 10 THEN 'Outperforming'
    WHEN COUNT(sc.id) >= 5 THEN 'Meeting targets'
    WHEN COUNT(sc.id) >= 1 THEN 'Underperforming'
    ELSE 'No sales'
  END AS performance_level
	FROM dealerships D
	LEFT JOIN staff S ON S.dealership_id = D.id
	LEFT JOIN sold_cars sc ON sc.seller = S.id
	GROUP BY D.city
	ORDER BY total_sales;
```
Here in the above code, we are using the CASE expression to evaluate the count of sales for each dealership and return a performance level based on the count. We are selecting the city and the total sales of each dealership and categorizing their performance based on the count of sales. We are ordering the results by total sales in descending order.

- Group sales into quarters as 'Q1', 'Q2', 'Q3' and 'Q4'
Output the quarter with the total sales for that quarter

For this challenge, use EXTRACT() to get the Month from sold_date
    e.g. EXTRACT(MONTH FROM sold_date)
Use this to define the quarter in your CASE statement

```sql
SELECT
	CASE
		WHEN EXTRACT(MONTH FROM sold_date) IN (1,2,3) THEN 'Q1'
		WHEN EXTRACT(MONTH FROM sold_date) IN (4,5,6) THEN 'Q2'
    WHEN EXTRACT(MONTH FROM sold_date) IN (7,8,9) THEN 'Q3'
		ELSE 'Q4'
	END AS quarter,
	COUNT(*) AS sold_cars
	FROM sold_cars
	GROUP BY quarter
	ORDER BY quarter;
```
Here in the above code, we are using the CASE expression to evaluate the month of the sold date and return the corresponding quarter. We are selecting the quarter and the count of sold cars for each quarter and ordering the results by quarter. 
