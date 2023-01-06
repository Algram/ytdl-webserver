FROM node:dubnium-stretch-slim

WORKDIR /home/app

RUN apt update \
    && apt install --no-install-recommends -y curl ffmpeg \
    && rm -rf /var/lib/apt/lists/*

# This is on a separate line because youtube-dl needs to be frequently updated
RUN apt update \
    && apt install --no-install-recommends -y youtube-dl \
    && rm -rf /var/lib/apt/lists/*

# Only install node_modules if the package.json changes
COPY package.json package-lock.json ./
RUN npm ci

COPY . ./
RUN mkdir -p public/temp \
    && npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
