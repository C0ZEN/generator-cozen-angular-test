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
			'<%= currentTarget %>/scripts/cozen-angular-generator-test.min.js': '<%= currentTarget %>/scripts/cozen-angular-generator-test.js'
		}
	},
	dev          : {
		options: {
			minified: true,
			compact : true,
			comments: false
		},
		files  : {
			'<%= paths.app %>/scripts/cozen-angular-generator-test.min.js': '<%= paths.app %>/scripts/cozen-angular-generator-test.js'
		}
	},
	vendors      : {
		options: {
			sourceMap: false,
			minified : true,
			compact  : true,
			comments : false
		},
		files  : {
			'<%= currentTarget %>/scripts/vendor.js': '<%= currentTarget %>/scripts/vendor.js'
		}
	},
	concatScripts: {
		files: {
			'.tmp/release/scripts/cozen-angular-generator-test.min.js': '.tmp/release/scripts/cozen-angular-generator-test.min.js'
		}
	},
	concatJs     : {
		files: {
			'<%= paths.app %>/scripts/cozen-angular-generator-test.js': '<%= paths.app %>/scripts/cozen-angular-generator-test.js'
		}
	},
	concatRelease: {
		files: {
			'<%= currentTarget %>/scripts/cozen-angular-generator-test.js': '<%= currentTarget %>/scripts/cozen-angular-generator-test.js'
		}
	}
};