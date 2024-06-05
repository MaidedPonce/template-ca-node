FROM node:18

WORKDIR /myapp
COPY package.json /myapp
RUN npm install

COPY . .
CMD npm run start