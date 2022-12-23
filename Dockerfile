FROM php:8-fpm-alpine3.17 as base 

RUN apk update && \
    apk add git

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/


RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions pgsql pdo_pgsql zip exif bcmath gd redis intl pcntl  && \ 
    docker-php-ext-enable pgsql pdo_pgsql zip exif bcmath gd intl pcntl   
RUN install-php-extensions @composer


COPY php.production.ini "$PHP_INI_DIR/php.ini"

WORKDIR /var/www/

RUN git clone https://github.com/pixelfed/pixelfed.git 

WORKDIR /var/www/pixelfed

COPY env .env
RUN (crontab -l ; echo "* * * * * /usr/bin/php /usr/share/webapps/pixelfed/artisan schedule:run >> /dev/null 2>&1")| crontab -

RUN echo "hello"
CMD ["contrib/docker/start.fpm.sh"]
