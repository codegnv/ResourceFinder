# Database
We currently use a postgres database hosted on Supabase. The schema is available at: [schema.sql](schema.sql).


# AirTable to Supabase Extract Transform Load
**Note**: The below process is Ad Hoc, and should be transitioned from as the project matures. Some of the things it does, like basic sanitization of AirTable data, should be kept and improved on -- other things should be abandoned.

1. Download CSVs of the following tables from AirTable:
   * Departments
   * Programs (then modify the csv to have the first header field be "Program", rather than ".")
2. Run the following to generate `SQL`
   ```bash
   # These can be run in any order, because the tables have no dependencies
   python3 amenities_csv_to_sql.py amenities.csv >> out.sql
   python3 departments_csv_to_sql.py departments.csv >> out.sql
   python3 locations_csv_to_sql.py locations.csv >> out.sql
   python3 services_csv_to_sql.py services.csv >> out.sql
   python3 tags_csv_to_sql.py tags.csv >> out.sql
   
   # This can only be run after departments are loaded
   python3 programs_csv_to_sql.py programs.csv >> out.sql

   # And lastly, we can add the connections between tables
   python3 locations_amenities_csv_to_sql.py locations.csv amenities.csv >> out.sql
   python3 locations_services_csv_to_sql.py locations.csv services.csv >> out.sql
   python3 programs_services_csv_to_sql.py programs.csv services.csv >> out.sql 
   python3 tags_services_csv_to_sql.py tags.csv services.csv >> out.sql
   ```
3. Copy-paste `out.sql` into a SQL console in Supabase and execute it


This procedure assumes the following:

1. The AirTable and Postgres tables have the expected column names, table names, and data types
2. The relevant postgres tables have `UNIQUE` name columns we can `SELECT` on, and then `CREATE OR UPDATE` to:
   ```sql
   -- From pg_dump
   ADD CONSTRAINT amenities_name_key UNIQUE (name);
   ADD CONSTRAINT departments_name_key UNIQUE (name);
   ADD CONSTRAINT locations_name_key UNIQUE (name);
   ADD CONSTRAINT programs_name_key UNIQUE (name);
   ADD CONSTRAINT services_name_key UNIQUE (name);
   ADD CONSTRAINT tags_name_key UNIQUE (name);
    ```
