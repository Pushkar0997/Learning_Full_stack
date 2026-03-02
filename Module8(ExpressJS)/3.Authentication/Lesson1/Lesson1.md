# Create a user table

Here there were just 2 bugs to be solved.
1. We should use `driver: sqlite3.Database` instead of `driver: sqlite3.database` when creating the database connection.
2. We should use `db.exec()` instead of `db.insert()` to execute the SQL command for creating the table.