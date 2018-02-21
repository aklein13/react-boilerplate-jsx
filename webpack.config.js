const path              = require('path');
const webpack           = require('webpack');
const PolyfillsPlugin   = require('webpack-polyfill-service-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/app'
    ]
  },
  output: {
    path: path.resolve('./dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'eval',
  plugins: [
    new PolyfillsPlugin({
      minify: true,
      features: {
        "fetch": {flags: ['always', 'gated']}
      }
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json'),
      sourceType: 'var'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    hotOnly: true,
    contentBase: 'assets/',
    host: '0.0.0.0',
    port: 8080
  },
  // module: {
  //   loaders: [{
  //     exclude: /node_modules/,
  //     loader: 'babel-loader',
  //     query: {
  //       presets: ['react', 'es2015', 'stage-1']
  //     }
  //   }]
  // },
   module: {
    rules: [
      {
        test: /.*\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'url'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  }
};
