# 
import csv
import sys

tags_csv = sys.argv[1]
services_csv = sys.argv[2]

with open(tags_csv, encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    tag_set = set()
    for row in reader:
        if len(row['Tag'].strip()) > 0:
            tag_set.add(row['Tag'].strip().replace("'", "''"))


with open(services_csv, encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    rows = [row for row in reader]

query_start = f"INSERT INTO tags_services (service_id, tag_id) VALUES "
query_end = 'ON CONFLICT DO NOTHING;'
for row in rows:
    if len(row['Service'].strip()) > 0 and len(row['Program'].strip()) > 0:
        service = row["Service"].strip().replace("'", "''")
        tags = [i.strip().replace("'", "''").replace('""', '"') for i in row['Tags'].split(",")]
        for tag in tags:
            if tag in tag_set:
                query = f"( (SELECT id from services where name='{service}'), (SELECT id from tags WHERE name='{tag}') ) "
                print(query_start + query + query_end)
            else:
                print(f'-- ERROR: tag={tag}, len={len(tag)} malformed')
