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
module.exports = function (grunt) {
	return {
		dev       : {
			options: {
				map       : true,
				processors: [
					require('pixrem')(),
					require('autoprefixer')({
						browsers: grunt.file.read('package.json').browserslist,
						cascade : true,
						add     : true,
						remove  : false,
						supports: true,
						flexbox : true,
						grid    : true
					})
				]
			},
			files  : [
				{
					expand: true,
					cwd   : '<%= paths.app %>/styles/css',
					src   : '*.css',
					dest  : '<%= paths.app %>/styles/css'
				}
			]
		},
		vendorsDev: {
			options: '<%= postcss.dev.options %>',
			files  : {
				'<%= paths.app %>/styles/css/vendors.min.css': '.tmp/vendors/vendors.css'
			}
		},
		vendors   : {
			options: '<%= postcss.dev.options %>',
			files  : {
				'<%= currentTarget %>/styles/vendors.min.css': '.tmp/vendors/vendors.css'
			}
		}
	};
};