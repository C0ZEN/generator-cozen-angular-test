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
	main: {
		options: {
			compress : false,
			sourceMap: true
		},
		files  : {
			'<%= paths.app %>/styles/css/cozen-angular-generator-test.css': '<%= paths.app %>/styles/less/cozen-angular-generator-test.less',
			'<%= paths.app %>/styles/css/init-loader.css'        : '<%= paths.app %>/styles/less/cozen-angular-generator-test.loader.less'
		}
	},
	tmp : {
		options: {
			compress : false,
			sourceMap: true
		},
		files  : {
			'.tmp/release/styles/cozen-angular-generator-test.css': '<%= paths.app %>/styles/less/cozen-angular-generator-test.less',
			'.tmp/release/styles/init-loader.css'        : '<%= paths.app %>/styles/less/cozen-angular-generator-test.loader.less'
		}
	}
};