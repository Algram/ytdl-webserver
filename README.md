# ytdl-webserver
Webserver for downloading youtube videos. Ready for docker.

![Imgur](http://i.imgur.com/FNcKnfQ.gif)


## Installation
### As a server
``` bash
npm install && npm start hapi
```

### As a docker image
```
docker build -t <your username>/ytdl-webserver .
docker run -p 3000:3000 -d <your username>/ytdl-webserver
```


## Development
To start contributing you only have to run one command.
``` bash
npm start
```
This will start webpack and a dev server on `localhost:8080`

## License
MIT
