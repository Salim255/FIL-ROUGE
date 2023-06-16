FROM node:14-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .
###COPY migrations .
COPY Makefile .
#RUN apk add --update  && apk add make
#RUN apt install build-essential -y --no-install-recommends
RUN npm install

COPY . .
#RUN chmod a+x /app/start.sh
#RUN [ "/app/start.sh" ]
EXPOSE 3000


#ENTRYPOINT [ "/app/start.sh" ]
CMD ["node", "server.js"]



#CMD ["/bin/sh", "-c", "/app/start.sh && node server.js ;"]