FROM php:8-fpm-alpine3.17 as base 

COPY php.production.ini "$PHP_INI_DIR/php.ini"

RUN apk update && \
    apk add git

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/


RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions pgsql pdo_pgsql zip exif bcmath gd redis intl pcntl  && \ 
    docker-php-ext-enable pgsql pdo_pgsql zip exif bcmath gd intl pcntl   
RUN install-php-extensions @composer




WORKDIR /var/www/

RUN mkdir pixelfed

WORKDIR /var/www/pixelfed

COPY . .
RUN (crontab -l ; echo "* * * * * /usr/bin/php /var/www/pixelfed/artisan schedule:run >> /dev/null 2>&1")| crontab -

RUN chown -R www-data:www-data . 
RUN find . -type d -exec chmod 755 {} \; 
RUN find . -type f -exec chmod 644 {} \; 

CMD ["/var/www/pixelfed/boot.sh"]
