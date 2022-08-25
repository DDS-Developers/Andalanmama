FROM php:7.3-apache-stretch

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

RUN apt-get update -y && \
    apt-get install -y wget git zip unzip zlib1g-dev libpng-dev libicu-dev g++ sqlite3 && \
    docker-php-ext-configure intl && \
    docker-php-ext-install mysqli pdo pdo_mysql intl && \
    a2enmod rewrite && \
    docker-php-ext-install mbstring && \
    docker-php-ext-install gd && \
    wget https://getcomposer.org/download/1.8.4/composer.phar && \
    chmod +x composer.phar && \
    mv composer.phar /usr/local/bin/composer
COPY . /var/www/html
WORKDIR /var/www/html
RUN composer install --prefer-dist
