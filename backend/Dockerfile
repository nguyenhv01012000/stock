 # Dockerfile  
FROM node:18
WORKDIR /app  
COPY package.json /app  
RUN yarn
COPY . /app  
EXPOSE 4004  
CMD npm start