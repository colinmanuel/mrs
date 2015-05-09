module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/scriptgrunt.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    concat: {   
      dist: {
          src: [
              'js/jquery.js',
              'js/bootstrap.min.js',
              'js/jquery.easing.min.js',
              'js/jquery.lazyload.min.js',
              'js/lightslider.js',
              'js/script.js'
          ],
          dest: 'js/build/production.js'
      }
    },
    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};