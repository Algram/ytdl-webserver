# python 3.7 and node 8 LTS
FROM austinpray/python-node:3.7-8 as dev

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

FROM alpine:3.8 as prod

WORKDIR /home/app
EXPOSE 3000
CMD [ "npm", "start" ]

RUN apk add --update --no-cache \
        python3 \
        ffmpeg \
        nodejs \
        nodejs-npm \
        ca-certificates && \
    find / -type d -name __pycache__ -exec rm -r {} +   && \
    rm -r /usr/lib/python*/ensurepip                    && \
    rm -r /usr/lib/python*/lib2to3                      && \
    rm -r /usr/lib/python*/turtledemo                   && \
    rm /usr/lib/python*/turtle.py                       && \
    rm /usr/lib/python*/webbrowser.py                   && \
    rm /usr/lib/python*/doctest.py                      && \
    rm /usr/lib/python*/pydoc.py                        && \
    rm -rf /root/.cache /var/cache /usr/share/terminfo  && \
    ln /usr/bin/python3.6 /usr/bin/python               && \
    mkdir -p public/temp

# install the latest npm and only the production/non-dev dependencies
COPY package.json package-lock.json ./
RUN npm install -g npm@latest && npm ci --only=production && npm cache clean --force

# copy over the source code
COPY src ./src

# copy the frontend build over from the dev stage
COPY --from=dev /home/app/public ./public

# run node server
CMD ["npm", "start"]
