FROM php:5.6-apache

COPY apache2-foreground /usr/local/bin/
COPY templates /var/apache2/templates/
COPY conf/ /etc/apache2

php /var/apache2/templates/config-template.php > /etc/apache2/site-available/001-reverse-proxy.conf

RUN a2enmod proxy proxy_http
RUN a2ensite 000-* 001-*
