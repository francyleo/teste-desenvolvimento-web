FROM node:14.17-alpine

WORKDIR /home/serve

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["npm", "dev"]
