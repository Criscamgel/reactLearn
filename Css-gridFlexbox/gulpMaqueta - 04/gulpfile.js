const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css(){
    return gulp
    .src('./scss/app.scss')
    .pipe(autoprefixer({
        overrideBrowserlist: ['last 2 version'],
        cascade: false
    }))
    .pipe(sass({
        outputStyle: 'expanded', //nested, compact, compressed
    }))
    .pipe(gulp.dest('css'))

}

// Cada vez que hagas un cambio vas a ejecutar el paso de css a scss

function watchFiles(){
    gulp.watch('./scss/*.scss', css)
    /* gulp.watch('index.html') */
}

//Registrar funciones como tareas

gulp.task('css', css)
//Hacer las dos tareas watch en paralelo
/* gulp.task('watch', gulp.parallel(watchFiles)) */
gulp.task('watch', watchFiles)
