#
# Dockerfile for ytdl-webserver
#
FROM node:latest

RUN mkdir -p /home/app
WORKDIR /home/app

COPY . /home/app
RUN npm install
RUN npm build


EXPOSE 3000
CMD [ "npm", "run", "hapi" ]
