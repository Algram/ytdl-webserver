const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        'style-loader', 'css-loader!autoprefixer-loader!sass-loader')
    }]
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};
