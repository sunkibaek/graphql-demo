FROM node:14.16.0-slim

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

EXPOSE 3000

CMD yarn start
