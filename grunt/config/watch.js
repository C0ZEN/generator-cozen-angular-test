/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 03/02/2018
 * Time: 15:49
 * Version: 0.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	targets   : {
		files: [
			'<%= paths.app %>/config/targets/*.json'
		],
		tasks: [
			'preprocess:dev'
		]
	},
	languages : {
		files: [
			'<%= paths.app %>/languages/**/*.json',
			'<%= paths.app %>/scripts/**/*.json',
			'<%= paths.app %>/views/**/*.json',
			'!<%= paths.app %>/languages/min/*.json'
		],
		tasks: [
			'languages:dev'
		]
	},
	js        : {
		files: [
			'<%= paths.app %>/**/*.js',
			'Gruntfile.js',
			'!<%= paths.app %>/scripts/generator-cozen-angular-test.js',
			'!<%= paths.app %>/scripts/generator-cozen-angular-test.min.js',
			'!<%= paths.app %>/scripts/vendors.min.js'
		],
		tasks: [
			'jsMin:dev',
			'notify:buildReady'
		]
	},
	less      : {
		files: [
			'<%= paths.app %>/**/*.less'
		],
		tasks: [
			'less:main',
			'postcss:dev',
			'cssmin:dev',
			'notify:less'
		]
	},
	html      : {
		files: [
			'<%= paths.app %>/**/*.html',
			'!<%= paths.app %>/index.html'
		],
		tasks: [
			'wiredep',
			'preprocess:dev',
			'string-replace:devIndex',
			'htmlmin:dev',
			'jsMin:dev',
			'notify:buildReady'
		]
	},
	pug       : {
		files: [
			'<%= paths.app %>/**/*.pug'
		],
		tasks: [
			'pug:html'
		]
	},
	livereload: {
		options: {
			livereload: '<%= connect.options.livereload %>'
		},
		files  : [
			'<%= paths.app %>/scripts/generator-cozen-angular-test.min.js',
			'<%= paths.app %>/styles/css/*.css',
			'<%= paths.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg,ico}'
		]
	}
};