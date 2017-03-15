var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist/docs'),
    port: 4000,
    host: 'localhost',
    inline: true,
    info: false,
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src/index.html') },
    ]),
  ],
}
