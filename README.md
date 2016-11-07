# ytdl-webserver
Webserver for downloading youtube videos. Ready for docker.
If you have questions, read the [blog post](https://blog.rphl.io/selfhosted-youtube-downloader-with-docker/).

![Demovideo](http://imgur.com/iEpA1oQ.gif)


## Installation
### As a server
``` bash
npm install && npm start
```

### As a docker image
```
docker build -t <your username>/ytdl-webserver .
docker run -p 3000:3000 -d <your username>/ytdl-webserver
```


## Development
To start contributing you only have to run one command.
``` bash
npm run dev
```
This will start webpack and a dev server on `localhost:8080`

## License
MIT
