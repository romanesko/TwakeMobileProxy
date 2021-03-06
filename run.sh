#!/usr/bin/env bash

docker build -t twake-mobile-server .

if docker ps | grep -q twake-mobile-server; then
  docker stop twake-mobile-server
fi

if docker ps -a | grep -q twake-mobile-server; then
  docker rm -f twake-mobile-server
fi
docker run -e NODE_ENV=production -p 80:3123 -p 3123:3123 --name twake-mobile-server --net=host -d twake-mobile-server

