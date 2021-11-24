#!/bin/bash

HOME_DIR=/home/ec2-user/silkroad-hosting-web
DOCKER_APP_NAME=hostingweb
BLUE_FILE=${HOME_DIR}/deploy/docker-compose-blue.yml
GREEN_FILE=${HOME_DIR}/deploy/docker-compose-green.yml

EXIST_BLUE=$(sudo /usr/local/bin/docker-compose -p ${DOCKER_APP_NAME}-blue -f ${BLUE_FILE} ps | grep Up)

if [ -z "$EXIST_BLUE" ]; then
    echo "blue up"
    sudo /usr/local/bin/docker-compose -p ${DOCKER_APP_NAME}-blue -f ${BLUE_FILE} up -d --build
    sleep 5
    # RUNNING=$(docker inspect --format="{{.State.Running}}" ${DOCKER_APP_NAME}-blue_nextjs_1 2> /dev/null)
    # if [ "$RUNNING" == "true" ]; then
    sudo /usr/local/bin/docker-compose -p ${DOCKER_APP_NAME}-green -f ${GREEN_FILE} down
    sudo /usr/bin/docker system prune -f
    #     exit 0
    # else
    #     /usr/bin/docker system prune -f
    #     exit 0
    # fi
else
    echo "green up"
    sudo /usr/local/bin/docker-compose -p ${DOCKER_APP_NAME}-green -f ${GREEN_FILE} up -d --build
    sleep 5
    # RUNNING=$(docker inspect --format="{{.State.Running}}" ${DOCKER_APP_NAME}-green_nextjs_1 2> /dev/null)
    # if [ "$RUNNING" == "true" ]; then
    sudo /usr/local/bin/docker-compose -p ${DOCKER_APP_NAME}-blue -f ${BLUE_FILE} down
    sudo /usr/bin/docker system prune -f
    #     exit 0
    # else
    #     /usr/bin/docker system prune -f
    #     exit 0
    # fi
fi
exit 0