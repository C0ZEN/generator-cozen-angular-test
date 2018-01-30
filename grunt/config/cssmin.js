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
	dev    : {
		options: {
			keepSpecialComments: 0,
			sourceMap          : true
		},
		files  : [
			{
				'<%= paths.app %>/styles/css/cozen-angular-generator-test.min.css': '<%= paths.app %>/styles/css/cozen-angular-generator-test.css',
				'<%= paths.app %>/styles/css/init-loader.min.css'        : '<%= paths.app %>/styles/css/init-loader.css'
			}
		]
	},
	vendors: {
		options: {
			keepSpecialComments: 0,
			sourceMap          : false
		},
		files  : [
			{
				'<%= currentTarget %>/styles/vendor.css': '<%= currentTarget %>/styles/vendor.css'
			}
		]
	}
};