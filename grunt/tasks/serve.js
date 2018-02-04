/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 03/02/2018
 * Time: 16:15
 * Version: 0.0.0
 */
/* eslint valid-jsdoc:"off" */
module.exports = function (grunt) {
	grunt.registerTask('serve', 'Compile then start a connect web server', () => {
		grunt.task.run([
			'clean:server',
			'pug:html',
			'vendors',
			'postcss:vendorsDev',
			'cssmin:vendorsDev',
			'copy:vendorsJsDev',
			'preprocess:dev',
			'preprocess:devManifest',
			'preprocess:devStructuredData',
			'htmlmin:dev',
			'jsMin:dev',
			'less:main',
			'languages:dev',
			'concurrent:server',
			'postcss:dev',
			'cssmin:dev',
			'connect:livereload',
			'notify:serve',
			'watch'
		]);
	});
};