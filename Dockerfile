FROM node:latest

WORKDIR /src/app

COPY package.json /src/app

RUN npm install

RUN npm install -g nodemon

COPY . /src/app

EXPOSE 9000

CMD ["npm", "run", "server-dev"]
