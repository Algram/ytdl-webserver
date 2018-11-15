const Hapi = require('hapi')
const Inert = require('inert')
const mkdirp = require('mkdirp')
const path = require('path')
const youtube = require('./handlers/youtube')

const server = new Hapi.Server({
  routes: {
    files: {
      relativeTo: path.join(__dirname, '../../public')
    }
  },
  // Free hosting like Heroku, you have to set dynamic PORT for deloy
  port: process.env.PORT || 3000
})

const start = async () => {
  await server.register(Inert)

  // TODO add notifications to app
  // TODO remove duplicate downloads from ui
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
  })

  server.route({
    method: 'POST',
    path: '/download',
    handler: request => {
      const url = request.payload.url
      const options = {
        path: path.join(__dirname, '../../public/temp'),
        audioOnly: true
      }

      mkdirp(options.path, error => {
        if (error) {
            throw error
        }
      })

      return youtube.download(url, options)
    }
  })

  server.route({
    method: 'GET',
    path: '/request/{video}',
    handler: (request, h) => {
      const videoName = encodeURIComponent(request.params.video)
      return h.file(path.join('temp', decodeURIComponent(videoName)))
    }
  })

  return server.start()
}

start()
  .then(_ => {
      console.log('Server running at:', server.info.uri)
  })
  .catch(error => {
      console.log(error)
      process.exit(1)
  })