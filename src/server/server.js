const Hapi = require('hapi');
const Inert = require('inert');
const path = require('path');
const youtube = require('./handlers/youtube');

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: path.join(__dirname, '../../build')
      }
    }
  }
});
server.connection({ port: 3000 });

server.register(Inert, () => {});

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: {
    directory: {
      path: '.',
      listing: false,
      index: true
    }
  }
});

server.route({
  method: 'POST',
  path: '/download',
  handler: (request, reply) => {
    const url = request.payload.url;
    youtube.download(url);

    reply({
      name: 'somerandomperson – hello',
      url,
      downloading: false
    });
  }
});

server.start(err => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
