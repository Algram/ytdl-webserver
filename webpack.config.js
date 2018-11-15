const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        /*TODO: Add postcss loader here and create a file config with name .postcssrc.js*/
        loader: 'style-loader!css-loader!sass-loader'
        /* loader: MiniCssExtractPlugin.loader(
          'style-loader', 'css-loader!autoprefixer-loader!sass-loader')*/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'style.css'})
  ]
};
