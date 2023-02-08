# 
import csv
import sys

programs_csv = sys.argv[1]
services_csv = sys.argv[2]

with open(programs_csv, encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    program_set = set()
    for row in reader:
        if len(row['Program'].strip()) > 0:
            program_set.add(row['Program'].strip().replace("'", "''"))


with open(services_csv, encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    rows = [row for row in reader]

query_start = f"INSERT INTO programs_services (service_id, program_id) VALUES "
query_end = 'ON CONFLICT DO NOTHING;'
for row in rows:
    if len(row['Service'].strip()) > 0 and len(row['Program'].strip()) > 0:
        service = row["Service"].strip().replace("'", "''")
        programs = [i.strip().replace("'", "''").replace('""', '"') for i in row['Program'].split(",")]
        for program in programs:
            if program in program_set:
                query = f"( (SELECT id from services where name='{service}'), (SELECT id from programs WHERE name='{program}') ) "
                print(query_start + query + query_end)
            else:
                print(f'-- ERROR: {program} malformed')
