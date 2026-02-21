# Creating Tables

There are tables in the database for cars, delearships, staff, sold cars.

## Some Terminologies and Concepts

### Relationships
Tables relats to one another through different properties. Usually, we'll link them based on **primary keys** - the unique id for each row

There are different types of Relationships: 
- One to one
- One to many
- Many to many

#### One to One
Tables cars and sold_cars will have one-to-one relationship. Each car in either table can only relate to one car in sold_cars.  
Also, each sold car will relate to one member of staff who sold the car.

#### One to many
We can have multiple of these in our database:
- One dealership relates to many cars
- One dealership relates to many staff

#### Many to Many
We don't need many to many relationship in our set of tables.  
We might have a table of car parts. Every car has many parts and each part could relate to many cars.

### Primary Keys
A primary key is a column with unique identifiers for each row

### Foreign Keys
A foreign key is a unique identifiers which references another table.  
For example, dealership_id in the cars table will reference the primary key in the dealership table

### Types
Each column will have a type which defines what type of data we can insert to that column

### Constraints
Columns can be given constraints which further restrict what we can add to the column, for example that the column cannot be **NULL**

### SQl commands
#### Creating the dealership table
```sql
CREATE TABLE IF NOT EXISTS dealerships (
  id SERIAL PRIMARY KEY,
  city TEXT NOT NULL,
  state CHAR(2) NOT NULL,
  established DATE NOT NULL
);
```

#### Creating the staff table
```sql
CREATE TABLE IF NOT EXISTS staff (
  id SERIAL PRIMARY KEY,
  dealership_id INTEGER NOT NULL REFERENCES dealerships(id),
  name TEXT NOT NULL,
  role TEXT NOT NULL
);
```

#### Creating the Sold_cars table
```sql
CREATE TABLE IF NOT EXISTS sold_cars (
  id SERIAL PRIMARY KEY,
  cars_id INTEGER NOT NULL REFERENCES cars(id),
  seller INTEGER NOT NULL REFERENCES staff(id),
  sold_date DATE NOT NULL,
  sold_price INTEGER NOT NULL
);
```