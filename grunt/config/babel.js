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
/* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
module.exports = {
	options      : {
		sourceMap: true,
		minified : false,
		compact  : false,
		comments : true,
		presets  : [
			'env'
		]
	},
	release      : {
		options: {
			minified: true,
			compact : true,
			comments: false
		},
		files  : {
			'<%= currentTarget %>/scripts/generator-cozen-angular-test.min.js': '<%= currentTarget %>/scripts/generator-cozen-angular-test.js'
		}
	},
	dev          : {
		options: {
			minified: true,
			compact : true,
			comments: false
		},
		files  : {
			'<%= paths.app %>/scripts/generator-cozen-angular-test.min.js': '<%= paths.app %>/scripts/generator-cozen-angular-test.js'
		}
	},
	concatScripts: {
		files: {
			'.tmp/release/scripts/generator-cozen-angular-test.min.js': '.tmp/release/scripts/generator-cozen-angular-test.min.js'
		}
	},
	concatJs     : {
		files: {
			'<%= paths.app %>/scripts/generator-cozen-angular-test.js': '<%= paths.app %>/scripts/generator-cozen-angular-test.js'
		}
	},
	concatRelease: {
		files: {
			'<%= currentTarget %>/scripts/generator-cozen-angular-test.js': '<%= currentTarget %>/scripts/generator-cozen-angular-test.js'
		}
	}
};