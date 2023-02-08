# A script to transform csv fields ("Service") to 
# sql columns (name, department_id) on table services
import csv
import sys

csv_file = sys.argv[1]
with open(csv_file, encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    rows = [row for row in reader]

query_start = f"INSERT INTO services (name) VALUES "
query_end = 'ON CONFLICT DO NOTHING;'
for row in rows:
    if len(row['Service'].strip()) > 0:
        name = row['Service'].strip().replace("'", "''")
        print(query_start + f"('{name}') " + query_end)
