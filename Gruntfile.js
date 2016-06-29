
module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= pkg.license %> */\n',
        // Task configuration

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: 'build/Hotspot.js',
                dest: 'build/Hotspot.min.js'
            }
        },

        concat: {
            dist: {
                src: ["build/src/**/*.js"],
                dest: "build/Hotspot.js"
            }
        },

        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'qunit']
            }
        },

        babel: {
            options: {
                presets: ["es2015"]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "lib/",
                    src: ["**/*.js"],
                    dest: "build/src/"
                }]
            }
        },

        jsdoc: {
            dist: {
                src: ["lib/**/*.js", "README.md"]
            },
            options: {
                destination: "docs/"
            }
        },

        strictly: {
            files: [
                "lib/**/*.js"
            ]
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-jsdoc");
    grunt.loadNpmTasks("strictly");


    // Default task
    grunt.registerTask("default", ["strictly", "babel", "concat", "uglify"]);
};

