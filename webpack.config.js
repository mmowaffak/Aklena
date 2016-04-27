
var config = {
   entry: './client/main.js',
   devtool : 'sourcemaps',
   output: {
      path:'./',
      filename: './server/assets/index.js',
   },
   module: {
      loaders: [ {
         test: /\.js?$/,
         exclude: /node_modules/,
         loader: 'babel',
         query: {
            presets: ['es2015', 'react']
         }
      }]
   }

}

module.exports = config;
