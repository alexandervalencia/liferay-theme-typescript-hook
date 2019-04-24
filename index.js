'use strict';

var path = require('path');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

module.exports = function(gulp, options) {
	var runSquence = require('run-sequence').use(gulp);

	var pathBuild = options.pathBuild;

	gulp.task('typescript:compile', function() {
		return tsProject.src()
			.pipe(tsProject())
			.js.pipe(gulp.dest(path.join(pathBuild, 'js')));
	});

	gulp.hook('after:build:src', function(done) {
		runSquence(
			'typescript:compile',
			done
		);
	});
}