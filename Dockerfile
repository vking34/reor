FROM node:12.21.0-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]