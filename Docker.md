# Redis in Docker container

## Redis Service
### Commands
Build the container
````
$ docker build -t <your username>/redis .
````

Start the container
````
$ docker run -p 6379:6379 --name redis -d <your username>/redis
````

### Reference
https://docs.docker.com/engine/examples/running_redis_service/

## NodeJS in Docker container

Build the container
````
$ docker build -t <your username>/url-shortener .
````

Run the container
````
$ docker run -p 49160:3000 -d <your username>/url-shortener
````

Print output of the app
````
# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Running on http://localhost:49160
````

Get inside the container
````
$ docker exec -it <container id> /bin/bash
````

### Reference
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
