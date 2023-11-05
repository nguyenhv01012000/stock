 # Dockerfile  
FROM node:18
WORKDIR /app  
COPY package.json /app  
RUN yarn
COPY . /app  
EXPOSE 3003  
CMD npm start