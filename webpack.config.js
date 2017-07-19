const path = require('path');

module.exports = {
  context: __dirname,
   entry: [
     './app/index.js'
   ],
   output: {
     path: path.join(__dirname, 'app'),
     filename: 'bundle.js',
     publicPath: '/app/'
   },
   module: {
     loaders: [{
       test: /.jsx?$/,
       loader: 'babel-loader',
       include: path.join(__dirname, 'app'),
       exclude: /node_modules/,
       query: {
         presets: ['es2015', 'react']
       }
     }]
   },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css']
  },
  devServer: {
   proxy: { // proxy URLs to backend development server
     '/api': 'http://localhost:3000'
   },
   contentBase: path.join(__dirname), // boolean | string | array, static file location
   compress: true, // enable gzip compression
   historyApiFallback: true, // true for index.html upon 404, object for multiple paths
   hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
   https: false, // true for self-signed, object for cert authority
   noInfo: true, // only errors & warns on hot reload
   // ...
 },
};
