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
docker container run -p 4004:4000  stock-backend  

```
docker build -t stock-frontend .
docker run -i -t -p 3003:3000  stock-frontend   
```

## Shalom!
