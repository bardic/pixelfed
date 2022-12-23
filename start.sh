#!/bin/sh



docker stop $(docker ps -q)
docker volume prune 
docker container prune 
docker network prune 
docker network create openbracket
docker-compose up