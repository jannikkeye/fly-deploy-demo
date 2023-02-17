FROM node:19-alpine

WORKDIR /app

COPY package*.json .

COPY ./prisma .

RUN npm ci

COPY . .

RUN npm run build

CMD npm run start