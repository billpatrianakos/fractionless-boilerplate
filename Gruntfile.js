/**
 * Fractionless build tasks
 *
 * Use this file to build the project
 * or modify it to suit your own project.
 */

module.exports = function(grunt) {

  // Time your grunt tasks and never need to loadGruntTask again
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      dev: 'src',
      dist: 'dist',
      build: '<%= grunt.template.today("yyyymmdd") %>'
    },

    // local server
    connect: {
      server: {
        options: {
          host: 'localhost',
          port: '9000',
          base: '<%= project.dev %>/'
        }
      }
    },

    // watch for file changes
    watch: {
      styles: {
        files: ['<%= project.dev %>/less/**/*.less'],
        tasks: ['less:dev'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['<%= project.dev %>/js/**/*.js', 'Gruntfile.js'],
        tasks: ['jshint:dev'],
        options: {
          livereload: true,
          reload: true
        }
      }
    },

    // compile less
    less: {
      dev: {
        files: {
          '<%= project.dev %>/css/style.css': ['<%= project.dev %>/less/style.less']
        }
      }
    },

    // lint js
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      dev: ['<%= project.dev %>/js/**/*.js']
    }
  });

  // Tasks
  grunt.registerTask('default', ['develop']);
  grunt.registerTask('develop', [
    'connect:server',
    'watch'
    ]);
};
