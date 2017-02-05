# Useful Docker commands
Some useful commands for working with the Docker container

## Build the docker container
````
docker build -t < docker user name >/url-shortener .
````

## Start the docker container
````
docker run -p 3000:3000 -d < docker user name >/url-shortener
````

## List the running container
````
docker ps
````

## Open shell in docker container
````
docker exec -it < docker container id > /bin/bash
````
