#!/bin/sh

if test -f "/var/www/pixelfed/.ready"; then
    echo "Intial run already completed "
else
    composer install --no-ansi --no-interaction --optimize-autoloader

    php artisan key:generate
    php artisan migrate --force
    php artisan import:cities
    php artisan instance:actor
    php artisan storage:link


    touch /var/www/pixelfed/.ready
fi

# Refresh the environment
php artisan horizon:publish
php artisan route:cache
php artisan view:cache
php artisan config:cache
# Finally run FPM
php-fpm -D 

go www-data php artisan horizon