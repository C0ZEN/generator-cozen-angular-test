/**
 * Generated header by Geoffrey Testelin for cozen-angular-generator-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 30/01/2018
 * Time: 21:43
 * Version: 0.0.0
 */
/* eslint valid-jsdoc:"off" */
module.exports = function (grunt) {
	grunt.registerMultiTask('jsMin', 'JS min task to compile the .js', () => {

		// Get the current target
		const target = this.task.current.target;

		// Run the jsMin task
		if ('dev' === target) {
			grunt.task.run([
				'concat:js',
				'babel:concatJs',
				'babel:dev',
				'merge-json:min'
			]);
		}
		else if ('release' === target) {
			grunt.task.run([
				'ngtemplates:release',
				'concat:release',
				'concat:concatRelease',
				'babel:release',
				'merge-json:min'
			]);
		}
	});
};