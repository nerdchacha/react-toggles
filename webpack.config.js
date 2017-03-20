var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

const bundles = {
  'ios': ['./src/components/toggle/stylesheet/ios'],
  'skew': ['./src/components/toggle/stylesheet/skew'],
  'flip': ['./src/components/toggle/stylesheet/flip'],
  'bundle': './src/index.js'
}
module.exports = {
  entry: bundles,
  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract("style-loader", ["css-loader", "postcss-loader", "sass-loader"]),
      },
    ],
  },
  postcss: () => {
    return [
      require('autoprefixer')
    ];
  },
  devServer: {
    port: 4000,
    host: 'localhost',
    inline: true,
    info: false,
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'src/index.html') },
    ]),
    new ExtractTextPlugin('[name].css', { allChunks: true }),
  ],
}
