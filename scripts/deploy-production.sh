#!/bin/sh

set -e

# scan and apply gitlab authorized key & perform pull git
ssh root@${SERVER_IP_PRODUCTION} "cd /root/${CI_PROJECT_NAME} && ssh-keyscan -H gitlab.com >> ~/.ssh/known_hosts && git pull origin master"

# and pull the latest docker image
ssh root@${SERVER_IP_PRODUCTION} "cd /root/${CI_PROJECT_NAME} && sh update.sh"

# cleanup unused images
ssh root@${SERVER_IP_PRODUCTION} "docker image prune --force"
