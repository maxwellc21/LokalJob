FROM node:18-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY ./src ./src
COPY .env .env

EXPOSE 5003

CMD ["npm", "start"]
