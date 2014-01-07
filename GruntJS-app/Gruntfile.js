module.exports = function(grunt) {

	grunt.initConfig({

		uglify: {
			my_target: {
		      files: {
		        'assets/js/app.min.js': // destination
		        ['assets/js/app.js', 'assets/js/main.js', 'assets/js/module.js'] // source
		      }
		    }
		},

		htmlmin: {
			dist: {
		  		options: {
		    	removeComments: true,
		    	collapseWhitespace: true
		  	},
		  	files: {
		    		'dist/index.html': 'src/index.html', // destination
					'dist/internal.html': 'src/internal.html' // source
				}
			}
		},

		watch: {
		    src: {
		      files: ['src/*.html', 'assets/js/*.js', 'assets/css/*.css', '!assets/js/app.min.js'],
		      tasks: ['build'],
		    },
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['htmlmin', 'uglify']);

	grunt.event.on('watch', function(action, filepath) {
	  grunt.log.writeln(filepath + ' has ' + action);
	});

}