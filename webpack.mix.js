const mix = require('laravel-mix');

mix.webpackConfig({
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  }
})

mix.js('resources/js/app.js', 'public/js')
   .extract(['vue', 'bootstrap', 'jquery'])
   .version()

mix.sass('resources/sass/app.scss', 'public/css')
   .sourceMaps()

mix.autoload({
    'jquery': ['$', 'window.jQuery', 'jQuery'],
    'vue': ['Vue','window.Vue'],   
    'moment': ['moment','window.moment'],   
  })

