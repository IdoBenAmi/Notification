FROM node:latest

RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "dist/server.js" ]
