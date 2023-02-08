# A script to transform csv fields ("Tag") to 
# sql columns (name) on table tags
import csv
import sys

csv_file = sys.argv[1]
with open(csv_file, encoding='utf-8-sig') as csvfile:
    locationreader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    location_rows = [row for row in locationreader]

query_start = f"INSERT INTO tags (name) VALUES "
query_end = 'ON CONFLICT DO NOTHING;'
for row in location_rows:
    if len(row['Tag'].strip()) > 0:
        name = row['Tag'].strip()
        print(query_start + f"('{name}') " + query_end)
