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
	dev    : {
		options: {
			keepSpecialComments: 0,
			sourceMap          : true
		},
		files  : [
			{
				'<%= paths.app %>/styles/css/generator-cozen-angular-test.min.css': '<%= paths.app %>/styles/css/generator-cozen-angular-test.css',
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