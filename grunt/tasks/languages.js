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
	grunt.registerMultiTask('languages', 'Languages task to compile the .json', () => {

		// Get the current target
		const target = this.task.current.target;

		// Run the languages task
		if ('dev' === target) {
			grunt.task.run([
				'clean:languages',
				'merge-json:merge',
				'merge-json:min'
			]);
		}
		else if ('release' === target) {
			grunt.task.run([
				'clean:languages',
				'merge-json:merge',
				'merge-json:min',
				'copy:languages'
			]);
		}
	});
};