/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 30/01/2018
 * Time: 22:49
 * Version: 0.0.0
 */
/* eslint valid-jsdoc:"off" */
module.exports = function (grunt) {
	grunt.registerMultiTask('release', 'Create a new stable version', () => {

		// Get the current target
		const target = this.task.current.data.target;
		grunt.config.set('currentTarget', target);

		// Run the release task
		grunt.task.run([
			'npm-command:test',
			'clean:release',
			'clean:devIndex',
			'wiredep',
			'preprocess:' + target,
			'preprocess:manifest',
			'jsMin:release',
			'less:main',
			'languages:release',
			'postcss:dev',
			'cssmin:dev',
			'string-replace:index',
			'useminPrepare',
			'usemin',
			'concat:generated',
			'concat:vendors',
			'postcss:vendors',
			'cssmin:vendors',
			'htmlmin:release',
			'copy:release',
			'copy:i18n',
			'imagemin:release',
			'string-replace:cssPaths',
			'notify:release'
		]);
	});
};