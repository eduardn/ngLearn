module.exports = function (grunt) {

    grunt.initConfig({
        useminPrepare: {
            html: 'app/index.html',
        },
        usemin: {
            html: 'dist/index.html'
        },
        copy: {
            html: {
                src: 'app/index.html',
                dest: 'dist/index.html'
            }
        },
        browserSync: {
            bsFiles: {
                src: ['app/index.html',
                    'app/scripts/**/*.js',
                    'app/views/**/*.html',
                    'app/styles/*.css']
            },
            options: {
                server: {
                    baseDir: 'app',
                    routes: {
                        '/bower_components': 'bower_components'
                    }
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('build', [
        'copy:html',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'usemin'
    ]);

    grunt.registerTask('server', ['browserSync']);
}
