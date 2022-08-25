#!/bin/sh

# scan and apply gitlab authorized key & perform pull git
ssh root@${SERVER_IP} "cd /root/${CI_PROJECT_NAME} && ssh-keyscan -H gitlab.com >> ~/.ssh/known_hosts && git pull origin master"

# login
ssh root@${SERVER_IP} "docker login -u ${GITLAB_DEPLOY_USERNAME} -p ${GITLAB_DEPLOY_PASSWORD} registry.gitlab.com"

# and pull the latest docker image
ssh root@${SERVER_IP} "cd /root/${CI_PROJECT_NAME} && docker-compose -f docker-compose-prod.yml pull && docker-compose -f docker-compose-prod.yml stop && docker-compose -f docker-compose-prod.yml rm -f && docker-compose -f docker-compose-prod.yml up -d"

# cleanup unused images
ssh root@${SERVER_IP} "docker image prune --force"
