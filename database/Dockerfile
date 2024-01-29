FROM mysql:latest

ENV MYSQL_DATABASE=testSequelize2
ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes

COPY init.sql /docker-entrypoint-initdb.d/

CMD ["mysqld"]

EXPOSE 3306