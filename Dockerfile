FROM node:14.17

# Prepare project directory
RUN mkdir -p /var/www/html/
COPY ./frontend /var/www/html

# Build public web
WORKDIR /var/www/html/
RUN npm install && npm rebuild node-sass
RUN npm run web-build
RUN ls -all

FROM php:7.3-fpm-alpine3.13

# Install packages
RUN apk update --update-cache
RUN apk --no-cache add coreutils bash supervisor nginx curl gzip unzip git tzdata libjpeg-turbo-dev libpng-dev freetype-dev  && \
  cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime && echo "Asia/Jakarta" > /etc/timezone && apk del tzdata && \
  docker-php-ext-configure gd \
        --with-gd \
        --with-freetype-dir=/usr/include/ \
        --with-png-dir=/usr/include/ \
        --with-jpeg-dir=/usr/include/ && \
  NPROC=$(grep -c ^processor /proc/cpuinfo 2>/dev/null || 1) && \
  docker-php-ext-install -j${NPROC} gd &&\
  curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer && \
  docker-php-ext-install pdo_mysql && \
  mkdir /var/log/php-fpm

# Configure nginx
ADD config/nginx/mime.types /etc/nginx/mime.types
ADD config/nginx/nginx.conf /etc/nginx/nginx.conf
ADD config/nginx/h5bp /etc/nginx/h5bp

# Configure php
COPY config/php/fpm-pool.conf /usr/local/etc/php-fpm.d/www.conf
COPY config/php/php.ini /usr/local/etc/php/

# Configure supervisord
ADD config/supervisord-worker.conf /etc/supervisor/supervisord.conf

# Setup document root
RUN mkdir -p /var/www/html

# Install crontab
COPY config/crontab.txt /var/www/html/
RUN crontab crontab.txt && rm -f crontab.txt

# Add application
WORKDIR /var/www/html
COPY ./server /var/www/html/
RUN composer install && \
  cp .env.example .env && \
  touch database/database.sqlite && \
  mkdir storage && mkdir -p storage/app && \
  mkdir -p storage/framework && \
  mkdir -p storage/framework/cache && \
  mkdir -p storage/framework/sessions && \
  mkdir -p storage/framework/testing && \
  mkdir -p storage/framework/views && \
  mkdir -p storage/logs && \
  chmod 777 -R storage/ && \
  chown -R www-data:www-data storage && \
  chmod 777 database/database.sqlite && \
  php artisan key:generate && \
  php artisan migrate:fresh --seed

RUN ln -s /var/www/html/database/database.sqlite /var/www/html/public/database.sqlite

# Add frontend application
COPY --from=0 /var/www/html/build /var/www/html/public
RUN ls -all  /var/www/html/public

# Expose the port nginx is reachable on
EXPOSE 8080
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/supervisord.conf"]

# Configure a healthcheck to validate that everything is up&running
HEALTHCHECK --timeout=10s CMD curl --silent --fail http://127.0.0.1:8080/fpm-ping
