module.exports = function(grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            options: {
                jshintrc: true
            },
            grunt: "Gruntfile.js",
            source: "src/**/*.js"
        },
        jscs: {
            src: "src/*.js",
            gruntfile: "Gruntfile.js",
            options: {
                config: ".jscsrc"
            }
        },
        jsonlint: {
            pkg: {
                src: [ "package.json" ]
            }
        },
        uglify: {
            options: {
                banner: "/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.license %> */\n"
            },
            build: {
                src: "src/broiler.js",
                dest: "build/broiler-<%= pkg.version %>.min.js"
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-jscs");
    grunt.loadNpmTasks("grunt-jsonlint");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("default", [ "jshint", "jscs", "jsonlint", "uglify" ]);
    grunt.registerTask("ci", [ "jshint", "jscs", "jsonlint" ]);
};
