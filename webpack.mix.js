// webpack.mix.js

const mix = require('laravel-mix');

mix.sass('src/sass/app.scss', 'dist/css')
    .js('src/js/app.js', 'dist/js');