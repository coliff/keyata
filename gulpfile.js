var gulp = require("gulp");
var imagemin = require("gulp-imagemin");

// Task to minify images
gulp.task("default", function() {
  gulp
    .src("extension/**/*.+(png|jpg)")
    .pipe(
      imagemin({
        progressive: true
      })
    )
    .pipe(gulp.dest("extension/"));
});
