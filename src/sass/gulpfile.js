const {src,dest,watch,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

// build styles
function buildSyle(){
    return src('./**/*.scss')
       .pipe(sass())
       .pipe(dest('../assets/css'))
}

// track changes
function trackChamges(){
    watch(['./**/*.scss'],buildSyle)
}

exports.default = series(buildSyle,trackChamges)