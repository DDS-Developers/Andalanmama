#!/bih/sh

set -e

docker run -t --rm \
  -v $PWD/web/certs:/etc/letsencrypt \
  -v $PWD/web/certs-data:/data/letsencrypt \
  -v $PWD/web/log/letsencrypt:/var/log/letsencrypt \
  deliverous/certbot \
  renew \
  --webroot --webroot-path=/data/letsencrypt
  
docker kill -s HUP nginx >/dev/null 2>&1
