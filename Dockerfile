#
# Dockerfile for ytdl-webserver
#
FROM ubuntu:16.04

WORKDIR /home/app

RUN apt-get update \
    && apt-get install -y curl ffmpeg \
    && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@latest \
    && rm -rf /var/lib/apt/lists/*

# This is on a separate line because youtube-dl needs to be frequently updated
RUN apt-get update \
    && apt-get install -y youtube-dl \
    && rm -rf /var/lib/apt/lists/*

# only install node_modules if the package.json changes
COPY package.json package-lock.json ./
RUN npm ci

COPY . ./
RUN mkdir -p public/temp \
    && npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
