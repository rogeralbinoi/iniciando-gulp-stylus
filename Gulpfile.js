// importando dependências
var gulp = require('gulp'),
    stylus = require('gulp-stylus');

// task para compilar o stylus
gulp.task('stylus', function () {
    return gulp.src(['./styl/*.styl','!./styl/_*.styl'])
               .pipe(stylus())
               .pipe(gulp.dest('./css/'));
});

// task default que dispara o watch nos arquivos .styl
gulp.task('default', function() {
    gulp.watch(['./styl/**/*.styl'],['stylus']);
});