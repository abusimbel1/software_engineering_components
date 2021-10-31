#server volume
docker volume create servervol

#server build
docker build -t server .

#container run
docker run --name server-container --rm --mount source=servervol,target=/usr/src/app/serverdata  -p 5000:5555 --env PORT=5555 server

