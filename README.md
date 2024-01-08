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

Install Docker, Nginx

```
--deploy mongoDB
docker pull mongo:latest
docker run -d -p 27011:27017 --name mongo  -e MONGO_INITDB_ROOT_USERNAME=domino  -e MONGO_INITDB_ROOT_PASSWORD=password123  mongo:latest

--deploy service backend
bash command.sh 3 
bash command.sh 2

--deploy service frontend
cd frontend
npm run build
sudo cp /build /var/www/domino 
sudo systemctl restart nginx
```
video hướng dẫn: 

https://www.youtube.com/watch?v=1sdaPoXWQrw&list=PL_-VfJajZj0XGfh528VqhlgXUfzw1Y0N7&index=22

https://www.youtube.com/watch?v=zFwcLLl1gNw&list=PL_-VfJajZj0XGfh528VqhlgXUfzw1Y0N7&index=28

## Shalom!

