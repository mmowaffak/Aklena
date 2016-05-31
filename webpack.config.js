
var config = {
   entry: {
     index:'./client/main.js',
     dashboard:'./client/dashboardEntry.js'
   },
   devtool : 'sourcemaps',
   output: {
      path:'./',
      filename: './server/assets/[name].js',
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
