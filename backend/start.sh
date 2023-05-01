#!/bin/sh
set -e 
#To exit the script in case of error
echo "run db migration"
echo "start the app" $DB_USERNAME
DATABASE_URL=postgres://$DB_USERNAME:$DB_PASSWORD@$DB_HOST:5432/$DB_USERNAME npm run migrate up	
exec "$@"
#Means run all parameters in this script and run