const { src, dest, series } = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
sass.compiler = require('node-sass');

function cleanFiles() {
  return src(['dist/js/main.js', 'dist/css/*.css'], { allowEmpty: true })
    .pipe(clean());
}

function compilaSass() {
  return src([
    './src/frontend/styles/sass/*.scss'
  ])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(dest('dist/css'));
}

function minifyCSS() {
  return src('dist/css/*.css')
    .pipe(cleanCSS({ debug: true }, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(dest('dist/css'));
}


function concatJS() {
  return src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.bundle.min.js',
    'bower_components/bootstrap/js/dist/util.js',
    'bower_components/popper.js/dist/umd/popper.min.js',
    './src/frontend/angular/**/*.js',
    './src/frontend/js/*.js'
  ])
    .pipe(concat('main.js'))
    .pipe(dest('dist/js'));
}

exports.default = series(
  cleanFiles,
  compilaSass,
  minifyCSS,
  concatJS
);

