/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 31/01/2018
 * Time: 17:45
 * Version: 0.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	styles      : {
		expand: true,
		cwd   : '.tmp/release/styles',
		src   : '*.css',
		dest  : '<%= currentTarget %>/styles/css'
	},
	languages   : {
		expand: true,
		cwd   : '<%= paths.app %>/languages/min',
		dest  : '<%= currentTarget %>/languages/',
		src   : '*.json'
	},
	other       : {
		files: [
			{
				expand: true,
				cwd   : '<%= paths.app %>/styles/css/',
				src   : 'reset.min.css',
				dest  : '<%= currentTarget %>/styles/css'
			}
		]
	},
	release     : {
		files: {
			'<%= currentTarget %>/styles/generator-cozen-angular-test.css'    : '<%= paths.app %>/styles/css/generator-cozen-angular-test.css',
			'<%= currentTarget %>/styles/generator-cozen-angular-test.min.css': '<%= paths.app %>/styles/css/generator-cozen-angular-test.min.css',
			'<%= currentTarget %>/styles/init-loader.css'                     : '<%= paths.app %>/styles/css/init-loader.css',
			'<%= currentTarget %>/styles/init-loader.min.css'                 : '<%= paths.app %>/styles/css/init-loader.min.css'
		}
	},
	components  : {
		files: [
			{
				expand: true,
				cwd   : 'bower_components',
				src   : [
					'**/*.js',
					'**/*.css',
					'**/*.less'
				],
				dest  : '<%= currentTarget %>/bower_components'
			}
		]
	},
	i18n        : {
		files: {
			'<%= currentTarget %>/languages/i18n/fr.js': 'bower_components/angular-i18n/angular-locale_fr.js'
		}
	},
	medias      : {
		expand: true,
		dest  : '<%= currentTarget %>/medias',
		src   : '<%= paths.app %>/medias'
	},
	vendors     : {
		src : '<%= paths.app %>/config/tpls/vendors.tpl.html',
		dest: '<%= paths.app %>/config/tpls/vendors-generated.tpl.html'
	},
	vendorsJsDev: {
		src : '.tmp/vendors/vendors.js',
		dest: '<%= paths.app %>/scripts/vendors.min.js'
	},
	vendorsJs   : {
		src : '.tmp/vendors/vendors.js',
		dest: '<%= currentTarget %>/scripts/vendors.min.js'
	}
};