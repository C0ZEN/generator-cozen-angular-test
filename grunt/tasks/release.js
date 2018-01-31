/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 31/01/2018
 * Time: 16:48
 * Version: 0.0.0
 */
/* eslint valid-jsdoc:"off" */
module.exports = function (grunt) {
	grunt.registerTask('release', 'Create a new stable version', () => {

		// Run the release task
		grunt.task.run([
			'prompt:chooseTarget',
			'internal.release'
		]);
	});
};