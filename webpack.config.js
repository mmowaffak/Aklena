
var config = {
   entry: {
     index:'./js/main.js',
     dashboard:'./js/dashboardEntry.js'
   },
   devtool : 'sourcemaps',
   output: {
      path:'./',
      filename: './src/Public/[name].js',
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
