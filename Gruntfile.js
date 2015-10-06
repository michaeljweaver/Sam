module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    cordova: {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        // Target-specific file lists and/or options go here.
      },
    },
    phonegap: {
      config: {
        rootL 'src'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-cordova');
  grunt.loadNpmTasks('grunt-phonegap');


  grunt.registerTask('default', ['jshint']);

};
