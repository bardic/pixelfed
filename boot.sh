#!/bin/sh

if test -f "$FILE"; then
    echo "Intial run already completed "
else
    composer install --no-ansi --no-interaction --optimize-autoloader

    php artisan key:generate
    php artisan migrate --force
    php artisan import:cities
    php artisan instance:actor
    php artisan route:cache
    php artisan view:cache
    php artisan config:cache
    php artisan horizon:install
    php artisan horizon:publish
    php artisan storage:link

    


    touch /var/www/pixelfed/.ready
fi

php artisan horizon