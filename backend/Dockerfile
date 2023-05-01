FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY migrations .
COPY Makefile .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]

ENTRYPOINT [ "/app/start.sh" ]
