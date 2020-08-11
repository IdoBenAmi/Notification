# Project Title

Service which gets notification through API and send it with push notifications

## Description

api/Resource - post a new message then send notification using socket.io to some url 
Environment Variables
-- API_LISTENING_PORT: the port which the REST API will use
-- SOCKET_LISTENING_PORT: the port which the Socket.io will use for client to connect
-- PUBLISH_URL: the port which the Socket.io will publish that recievied new notification

## Getting Started

### Dependencies

* Node
* Docker Hub

### Installing

* Clone from Git
* docker build -t notification .

### Executing program

* run docker image using - docker run -it -p 5000:5000 notification -e API_LISTENING_PORT=5000 -e SOCKET_LISTENING_PORT=5001 -e PUBLISH_URL="http://localhost:3001"

* can use --env_file and link to environment file

* can use docker-compose.yaml for passing environemnt params


## Authors

Ido Ben Ami
