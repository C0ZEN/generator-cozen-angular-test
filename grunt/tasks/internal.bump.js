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
	grunt.registerTask('internal.bump', 'Execute the bump task with custom target', () => {
		grunt.task.run([
			'bump:' + grunt.config.get('newVersionTarget')
		]);
	});
};