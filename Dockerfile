#
# Dockerfile for ytdl-webserver
#
FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y ffmpeg
RUN apt-get install -y youtube-dl

RUN mkdir -p /home/app
WORKDIR /home/app
RUN mkdir -p public/temp

COPY . /home/app
RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
