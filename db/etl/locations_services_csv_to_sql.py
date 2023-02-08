# 
import csv
import sys

locations_csv = sys.argv[1]
services_csv = sys.argv[2]

with open(locations_csv, encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    locations = set()
    for row in reader:
        if len(row['Location Name'].strip()) > 0:
            locations.add(row['Location Name'].strip().replace("'", "''"))


with open(services_csv, encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    rows = [row for row in reader]

query_start = f"INSERT INTO locations_services (service_id, location_id) VALUES "
query_end = 'ON CONFLICT DO NOTHING;'
for row in rows:
    if len(row['Service'].strip()) > 0 and len(row['Location Name'].strip()) > 0:
        service = row["Service"].strip().replace("'", "''")
        locations = [i.strip().replace("'", "''").replace('""', '"')
                     .replace('"Albert "Ray" Massey Park"', 'Albert "Ray" Massey Park') for i in row['Location Name'].split(",")]
        for location in locations:
            query = f"( (SELECT id from services where name='{service}'), (SELECT id from locations WHERE name='{location}') ) "
            print(query_start + query + query_end)
