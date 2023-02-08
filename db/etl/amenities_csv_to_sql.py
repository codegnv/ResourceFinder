# A script to transform csv fields ("Name", "Street Address") to 
# sql columns (name) on table amentities
import csv
import sys

csv_file = sys.argv[1]
with open(csv_file, encoding='utf-8-sig') as csvfile:
    locationreader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    location_rows = [row for row in locationreader]

query_start = f"INSERT INTO amenities (name) VALUES "
query_end = 'ON CONFLICT DO NOTHING;'
for row in location_rows:
    if len(row['Name'].strip()) > 0:
        name = row['Name'].strip()
        print(query_start + f"('{name}') " + query_end)
