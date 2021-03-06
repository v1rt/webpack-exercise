const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  // Entry accepts a path or an object of entries.
  // The build chapter contains an example of the latter.
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Kanban app'
    })
  ],
  resolve: {
    extensions: [ '', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        include: [
          path.resolve(__dirname, 'app'),
        ],
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
