# A script to transform csv fields ("Department Name") to 
# sql columns (name) on table departments
import csv
import sys

csv_file = sys.argv[1]
with open(csv_file, encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    rows = [row for row in reader]

query_start = f"INSERT INTO departments (name) VALUES "
query_end = 'ON CONFLICT DO NOTHING;'
for row in rows:
    if len(row['Department Name'].strip()) > 0:
        name = row['Department Name'].strip()
        print(query_start + f"('{name}') " + query_end)
