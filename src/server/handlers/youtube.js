const ffmpeg = require('fluent-ffmpeg');
const youtubeDl = require('youtube-dl');

function download(url, options = {
  path: 'downloads',
  audioOnly: false
}) {
  let format = 'mp4';
  if (options.audioOnly) {
    format = 'mp3';
  }

  // TODO Add proper support for options
  const video = youtubeDl(url,
    // Optional arguments passed to youtube-dl.
    ['--format=18'],
    // Additional options can be given for calling `child_process.execFile()`.
    { cwd: __dirname });

  // Will be called when the download starts.
  video.on('info', info => {
    let filename = info.filename;
    filename = filename
                .replace('.mp4', '')
                .substring(0, filename.length - 16);

    // Convert to audio
    ffmpeg({ source: video })
      .on('end', () => {
        console.log('Transcoding succeeded !');
      })
      .toFormat(format)
      .save(`${filename}.${format}`);
  });
}

module.exports = {
  download
};
