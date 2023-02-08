# A script to transform csv fields ("Service") to 
# sql columns (name, department_id) on table services
import csv
import sys

# Services CSV has header: Service,Program,Tags,Location Name,Description,Criteria,Link,Fee or Free,Discounts Available
csv_file = sys.argv[1]
with open(csv_file, encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
    rows = [row for row in reader]

query_start = f"INSERT INTO services (name, description, link, has_fee_requirement, has_age_requirement, has_income_requirement) VALUES "
for row in rows:
    if len(row['Service'].strip()) > 0:
        name = row['Service'].strip().replace("'", "''")
        description = row['Description'].strip().replace("'", "''")
        link = row['Link'].strip().replace("'", "''")

        has_fee_requirement = 'true' if len(row['Fee or Free'].strip()) > 0 else 'false'

        has_age_requirement = 'true' if 'Age' in row['Criteria'] else 'false'
        has_income_requirement = 'true' if 'Income' in row['Criteria'] else 'false'

        query_end = f"ON CONFLICT (name) DO UPDATE SET description = '{description}', link = '{link}'"
        query_end += f", has_fee_requirement = '{has_fee_requirement}', has_age_requirement = '{has_age_requirement}',"
        query_end += f"has_income_requirement = '{has_income_requirement}';"
        print(query_start + 
              f"('{name}', '{description}', '{link}', '{has_fee_requirement}', '{has_age_requirement}', '{has_income_requirement}') " +
              query_end)
