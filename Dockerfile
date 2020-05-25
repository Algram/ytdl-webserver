FROM alpine:3.11

RUN apk update \
    && apk add curl ffmpeg nodejs npm python \
    && rm -rf /var/cache/apk/*

# This is on a separate line because youtube-dl needs to be frequently updated
RUN apk update \
    && apk add youtube-dl \
    && rm -rf /var/cache/apk/*

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD npm start
