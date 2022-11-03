## all docker containers
```docker
docker ps -a
```

## all running docker containers
```docker
docker ps
```

## stop docker conatiners
```docker
docker stop {Container-Id}
```

## remove stopped docker container
```docker
docker rm {Container-Id}
```

## remove docker image
```docker
docker rmi {Image-Name/Id}
```

## docker container logs
```docker
docker logs {Container-Name/Id}
```

## docker stream container logs
``` docker
docker logs {Container-Name/Id} -f
```

## create docker network
``` docker
- docker network create mongo-network
- docker network ls
```

## start mongo container
``` docker
-  docker run -p 27017:27017 -d -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --network mongo-network mongo
``` 

## start mongo express
``` docker
docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password -e ME_CONFIG_MONGODB_SERVER=mongodb --network mongo-network --name mongo-express mongo-express
```

## build docker image of node app
``` docker
docker build -t {image-name}:version {Dockerfile-Path}
```

## build from docker compose
``` docker 
docker-compose -f .\docker-compose.yaml up -d
```
