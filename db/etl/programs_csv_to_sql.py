# A script to transform csv fields ("Program", "Department") to 
# sql columns (name, department_id) on table programs
import csv
import sys

csv_file = sys.argv[1]
with open(csv_file, encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    rows = [row for row in reader]

query_start = f"INSERT INTO programs (name, department_id) VALUES "
query_end = 'ON CONFLICT DO NOTHING;'
for row in rows:
    if len(row['Program'].strip()) > 0 and len(row['Department'].strip()) > 0:
        name = row['Program'].strip().replace("'", "''")
        department = row['Department'].strip().replace("'", "''")
        foreign_key_lookup = f"(SELECT id from departments where name='{department}') "
        print(query_start + f"('{name}', " + foreign_key_lookup + ') ' + query_end)
