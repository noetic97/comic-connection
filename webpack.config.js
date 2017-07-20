const path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    './app/index.js',
  ],
  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',
    publicPath: '/app/',
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
  },
  devServer: {
    contentBase: path.join(__dirname),
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
  },
};
