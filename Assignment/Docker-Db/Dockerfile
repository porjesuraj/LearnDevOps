# Base image (mysql) used to create my image
FROM mysql:5.7

# Set the root password to root
ENV MYSQL_ROOT_PASSWORD "root"

# Create a database name ecommercedb
ENV MYSQL_DATABASE "ecommercedb"

# Copy file named db.sql from my machine to /docker-entrypoint-initdb.d of container
COPY ./db.sql /docker-entrypoint-initdb.d/

# expose the port to 3306 from container
EXPOSE 3306