FROM node:10.15-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm prune --production

ENV NODE_ENV=production
CMD ["npm", "start"]