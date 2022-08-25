#!/bin/sh


docker build -t $CI_REGISTRY_IMAGE:latest .
docker login -u gitlab-ci-token -p $CI_JOB_TOKEN registry.gitlab.com
docker push $CI_REGISTRY_IMAGE:latest
docker logout registry.gitlab.com
