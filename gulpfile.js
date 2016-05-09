var gulp = require('gulp');
var inky = require('inky')
var browserSync  = require('browser-sync').create();


// function parse() {
//   gulp.src('*.html')
//     .pipe(inky())
//     .pipe(gulp.dest('ready'));
// }

gulp.task('inky', function() {
  return gulp.src('plantillas/*.html')
  .pipe(inky())
  .pipe(gulp.dest('./'));
});

// Servidor estatico + Vigila archivos para modificaciones
gulp.task('serve', ['inky'], function() {
  browserSync.init({
    // proxy: "http://111.111.0.0/test/"
    server: "./"
  });
  gulp.watch('*plantillas/*.html', ['inky']);
  gulp.watch('*.html').on('change', browserSync.reload);
});

// Ejecuta las tareas
gulp.task('default', ['serve']);