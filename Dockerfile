M alpine:3.8 as base

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

# install the latest npm and clear the cache
RUN npm install -g npm@latest && \
    npm cache clean --force

COPY package.json package-lock.json ./


FROM base as dev

# install all dependencies including dev and clear the cache
RUN npm ci && \
    npm cache clean --force

# copy over the source code
COPY . .

# build the frontend
RUN npm run build


FROM base as prod

# install the prod/run/normal dependencies and clear the cache
RUN npm ci --only=production && \
    npm cache clean --force

# copy the frontend build over from the dev stage
COPY --from=dev /home/app/public ./public

# copy over the source code
COPY ./src ./src

