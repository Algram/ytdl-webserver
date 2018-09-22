# python 3.7 and node 8 LTS
FROM austinpray/python-node:3.7-8

WORKDIR /home/app
EXPOSE 3000
CMD [ "npm", "start" ]

RUN apt-get update \
    && apt-get install -y ffmpeg \
    && rm -rf /var/lib/apt/lists/*

# only install node_modules if the package.json changes
# youtube-dl is installed via node-youtube-dl dep
COPY package.json package-lock.json ./
RUN npm ci

COPY . ./
RUN mkdir -p public/temp \
    && npm run build
