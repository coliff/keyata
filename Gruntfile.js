module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    imagemin: {
      static: {
        options: {
          optimizationLevel: 4
        }
      },
      dynamic: {
        options: {
          optimizationLevel: 4,
          svgoPlugins: [{ removeViewBox: false }]
        },
        files: [
          {
            expand: true,
            cwd: "extension/",
            src: ["**/*.{png}"],
            dest: "extension/"
          }
        ]
      }
    },
    compress: {
      main: {
        options: {
          archive: "keyata-extension.zip"
        },
        files: [
          {
            expand: true,
            src: "**",
            cwd: "extension/",
            dest: "/"
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.registerTask("default", ["imagemin", "compress"]);
};
