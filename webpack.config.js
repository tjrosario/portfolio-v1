var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var validate = require('webpack-validator');
var parts = require('./config/parts');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var TARGET = process.env.npm_lifecycle_event;

var PATHS = {
  app: path.join(__dirname, 'app'),
  style: path.join(__dirname, 'app', 'client', 'styles', 'app.scss'),
  images: path.join(__dirname, 'app', 'client', 'images'),
  build: path.join(__dirname, 'dist')
};

var common = {
  entry: {
    style: PATHS.style,
    app: path.resolve('./app/client/client.js')
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file',
        include: PATHS.images
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&mimetype=application/font-woff" 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader" 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.tpl',
      appMountId: 'app',
      output: {
        path: path.resolve('./')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

// Detect how npm is run and branch based on that
switch (TARGET) {
  case 'build':
  case 'stats':
    config = merge(
      common,
      {
        devtool: 'source-map'
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.setupJS(PATHS.app, ['react', 'es2015']),
      parts.minify(),
      parts.extractCSS(PATHS.style)
    );
    break;
  default:
    config = merge(
      common,
      {
        devtool: 'eval-source-map'
      },
      parts.setupJS(PATHS.app, ['react', 'es2015', 'react-hmre']),
      parts.setupCSS(PATHS.style),
      parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT
      })
    );
}

// Run validator in quiet mode to avoid output in stats
module.exports = validate(config, {
  quiet: true
});
