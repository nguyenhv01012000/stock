# stock

1. Clone the Repository and change directory

```
git clone https://github.com/nguyenhv01012000/stock

```

2. Install the dependencies.

```
npm install
```

3. Run app locally.

```
npm start
```
4. Deploy.

```
docker build -t stock-backend .
docker container run -p 4004:4000 --name "stock-backend" stock-backend  

```
docker build -t stock-frontend .
docker run -i -t -p 3003:3000 --name "stock-frontend" stock-frontend   
```

## Shalom!

docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi -f $(docker images -aq)
