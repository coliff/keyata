const gulp = require("gulp");
const zip = require("gulp-zip");

gulp.task("default", () =>
  gulp
    .src("extension/**")
    .pipe(zip("keyata-extension.zip"))
    .pipe(gulp.dest("../keyata"))
);
