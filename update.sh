#!/bin/sh

set -e

docker login -u admin@olrange.com -p glpat-4t_QGmHqJd-QWLHDvuyN registry.gitlab.com

docker stop app_andalan
docker rm app_andalan

docker-compose pull
docker-compose stop
docker-compose up -d

docker logout registry.gitlab.com
docker exec app_andalan php artisan migrate --force
