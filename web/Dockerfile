FROM node:14.17-alpine

WORKDIR /home/web

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "start"]
