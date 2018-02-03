/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 03/02/2018
 * Time: 15:49
 * Version: 0.0.0
 */
/* eslint valid-jsdoc:"off" */
module.exports = function (grunt) {
	grunt.registerTask('internal.release', 'Create a new stable version', () => {
		grunt.task.run([
			'npm-command:test',
			'clean:release',
			'clean:devIndex',
			'pug:html',
			'preprocess:' + grunt.config.get('currentTarget'),
			'preprocess:manifest',
			'preprocess:structuredData',
			'jsMin:release',
			'less:main',
			'languages:release',
			'postcss:dev',
			'cssmin:dev',
			'vendors',
			'postcss:vendors',
			'cssmin:vendors',
			'copy:vendorsJs',
			'htmlmin:release',
			'copy:release',
			'copy:i18n',
			'copy:medias',
			'imagemin:release',
			'string-replace:cssPaths',
			'notify:release'
		]);
	});
};