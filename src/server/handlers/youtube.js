const fs = require('fs');
const path = require('path');
const youtubeDl = require('youtube-dl');

function download(videoId, options = {
  path: 'downloads',
  audioOnly: false
}) {
  // TODO Add proper support for options
  const video = youtubeDl(`http://www.youtube.com/watch?v=${videoId}`,
    // Optional arguments passed to youtube-dl.
    ['--format=18'],
    // Additional options can be given for calling `child_process.execFile()`.
    { cwd: __dirname });

  // Will be called when the download starts.
  video.on('info', info => {
    const filename = info.filename;
    // filename = filename
    //             .replace('.webm', '')
    //             .substring(0, filename.length - 17);

    video.pipe(fs.createWriteStream(path.join(
      options.path,
      options.audioOnly ? `${filename}.mp3` : `${filename}.webm`
    )));
  });
}

module.exports = {
  download
};
