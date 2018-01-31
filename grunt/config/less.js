/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 31/01/2018
 * Time: 09:58
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
			'<%= paths.app %>/styles/css/generator-cozen-angular-test.css': '<%= paths.app %>/styles/less/generator-cozen-angular-test.less',
			'<%= paths.app %>/styles/css/init-loader.css'        : '<%= paths.app %>/styles/less/generator-cozen-angular-test.loader.less'
		}
	},
	tmp : {
		options: {
			compress : false,
			sourceMap: true
		},
		files  : {
			'.tmp/release/styles/generator-cozen-angular-test.css': '<%= paths.app %>/styles/less/generator-cozen-angular-test.less',
			'.tmp/release/styles/init-loader.css'        : '<%= paths.app %>/styles/less/generator-cozen-angular-test.loader.less'
		}
	}
};