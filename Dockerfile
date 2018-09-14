FROM node:carbon

WORKDIR /app
COPY . /app

RUN npm install

CMD node index.js

EXPOSE 1337
