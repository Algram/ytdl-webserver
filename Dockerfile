FROM alpine:latest

RUN apk update \
    && apk add youtube-dl curl ffmpeg nodejs npm python \
    && rm -rf /var/cache/apk/*

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD npm start

EXPOSE 3000
