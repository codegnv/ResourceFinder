# A script to transform csv fields ("Location Name", "Street Address") to 
# sql columns (name, address) on table locations
import csv
import sys

csv_file = sys.argv[1]
with open(csv_file, encoding='utf-8-sig') as csvfile:
    locationreader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    location_rows = [row for row in locationreader]

query_start = f"INSERT INTO locations (name, address) VALUES "
query_end = 'ON CONFLICT DO NOTHING;'
for row in location_rows:
    if len(row['Location Name'].strip()) > 0 and len(row['Street Address'].strip()) > 0:
        name = row['Location Name'].strip()
        address = row['Street Address'].strip()
        print(query_start + f"('{name}', '{address}') " + query_end)
