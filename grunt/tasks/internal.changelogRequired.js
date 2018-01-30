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

	const chalk = require('chalk');

	grunt.registerTask('internal.changelogRequired', 'Log about missing changelog update', () => {
		grunt.log.writeln('\n' + chalk.yellow.bold('WARNING !'));
		grunt.log.writeln('Please consider updating the ' + chalk.cyan('CHANGELOG.md') + ' before creating a new release.');
	});
};