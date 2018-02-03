/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 03/02/2018
 * Time: 13:32
 * Version: 0.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	dev       : {
		options: {
			keepSpecialComments: 0,
			sourceMap          : true
		},
		files  : [
			{
				'<%= paths.app %>/styles/css/generator-cozen-angular-test.min.css': '<%= paths.app %>/styles/css/generator-cozen-angular-test.css',
				'<%= paths.app %>/styles/css/init-loader.min.css'                 : '<%= paths.app %>/styles/css/init-loader.css'
			}
		]
	},
	vendorsDev: {
		options: {
			keepSpecialComments: 0,
			sourceMap          : false
		},
		files  : [
			{
				'<%= paths.app %>/styles/css/vendors.min.css': '<%= paths.app %>/styles/css/vendors.min.css'
			}
		]
	},
	vendors   : {
		options: {
			keepSpecialComments: 0,
			sourceMap          : false
		},
		files  : [
			{
				'<%= currentTarget %>/styles/vendors.min.css': '<%= currentTarget %>/styles/vendors.min.css'
			}
		]
	}
};