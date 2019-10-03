const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const zip = require("gulp-zip");

gulp.task("imagemin", () =>
  gulp
    .src("extension/icons/**")
    .pipe(imagemin())
    .pipe(gulp.dest("extension/icons"))
);

gulp.task("default", () =>
  gulp
    .src("extension/**")
    .pipe(zip("keyata-extension.zip"))
    .pipe(gulp.dest("../keyata"))
);
