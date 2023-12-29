#!/bin/bash
if [ $1 == '1' ]
then 
    git add .
    git commit -m "add"
    git push
elif [ $1 == '2' ]
then 
    git pull
    cd ./backend
    docker build -t stock-backend .
    docker container run -p 4004:4004 --name "stock-backend" stock-backend  
elif [ $1 == '3' ]
then 
    docker stop stock-backend
    docker rm stock-backend
    docker image rm stock-backend
elif [ $1 == '4' ]
then 
    git pull
    cd ./frontend
    docker build -t stock-frontend .
    docker container run -p 3003:3000 --name "stock-frontend" stock-frontend  
elif [ $1 == '5' ]
then 
    docker stop stock-frontend
    docker rm stock-frontend
    docker image rm stock-frontend
fi
