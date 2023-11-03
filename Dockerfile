FROM php:8.1-apache-buster

RUN apt-get update \
    && curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs \
    && apt-get update \
    && apt-get install -y libzip-dev git wget --no-install-recommends \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN docker-php-ext-install pdo mysqli pdo_mysql zip;

RUN curl -sS https://getcomposer.org/installer | php -- \
    &&  mv composer.phar /usr/local/bin/composer

# Enable apache modules
RUN a2enmod rewrite

# Prepare fake SSL certificate
RUN apt-get update
RUN apt-get install -y ssl-cert

# Setup Apache2 mod_ssl
RUN a2enmod ssl


COPY docker/apache.conf /etc/apache2/sites-enabled/000-default.conf
COPY . /var/www

RUN useradd -ms /bin/bash ofrancois
RUN usermod -aG sudo ofrancois
RUN adduser ofrancois www-data
RUN chown ofrancois:www-data /var/www -R
RUN echo 'alias sf="php bin/console"' >> /home/ofrancois/.bashrc

WORKDIR /var/www
CMD ["apache2-foreground"]