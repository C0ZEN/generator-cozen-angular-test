/**
 * Generated header by Geoffrey Testelin for cozen-angular-generator-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 30/01/2018
 * Time: 21:43
 * Version: 0.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	scripts: {
		src : [
			'.tmp/release/scripts/app.min.js',
			'.tmp/release/scripts/main.min.js'
		],
		dest: '.tmp/release/scripts/cozen-angular-generator-test.min.js'
	},
	js     : {
		src : [
			'<%= paths.app %>/**/*.js',
			'!<%= paths.app %>/**/*.tpl.js',
			'!<%= paths.app %>/scripts/cozen-angular-generator-test.js',
			'!<%= paths.app %>/scripts/cozen-angular-generator-test.min.js'
		],
		dest: '<%= paths.app %>/scripts/cozen-angular-generator-test.js'
	},
	release: {
		src : [
			'<%= paths.app %>/**/*.js',
			'.tmp/release/template-cache.js',
			'!<%= paths.app %>/**/*.tpl.js',
			'!<%= paths.app %>/scripts/cozen-angular-generator-test.js',
			'!<%= paths.app %>/scripts/cozen-angular-generator-test.min.js'
		],
		dest: '<%= currentTarget %>/scripts/cozen-angular-generator-test.js'
	}
};