/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 31/01/2018
 * Time: 16:48
 * Version: 0.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	scripts: {
		src : [
			'.tmp/release/scripts/app.min.js',
			'.tmp/release/scripts/main.min.js'
		],
		dest: '.tmp/release/scripts/generator-cozen-angular-test.min.js'
	},
	js     : {
		src : [
			'<%= paths.app %>/**/*.js',
			'!<%= paths.app %>/**/*.tpl.js',
			'!<%= paths.app %>/scripts/generator-cozen-angular-test.js',
			'!<%= paths.app %>/scripts/generator-cozen-angular-test.min.js'
		],
		dest: '<%= paths.app %>/scripts/generator-cozen-angular-test.js'
	},
	release: {
		src : [
			'<%= paths.app %>/**/*.js',
			'.tmp/release/template-cache.js',
			'!<%= paths.app %>/**/*.tpl.js',
			'!<%= paths.app %>/scripts/generator-cozen-angular-test.js',
			'!<%= paths.app %>/scripts/generator-cozen-angular-test.min.js'
		],
		dest: '<%= currentTarget %>/scripts/generator-cozen-angular-test.js'
	}
};