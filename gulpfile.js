const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const zip = require("gulp-zip");

// Task to minify images
gulp.task("imagemin", function() {
  gulp
    .src("extension/**/*.+(png|jpg)")
    .pipe(
      imagemin({
        progressive: true
      })
    )
    .pipe(gulp.dest("extension/"));
});

gulp.task("default", () =>
  gulp
    .src("extension/**")
    .pipe(zip("keyata-extension.zip"))
    .pipe(gulp.dest("../keyata"))
);
