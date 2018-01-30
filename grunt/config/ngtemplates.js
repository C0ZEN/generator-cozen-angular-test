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
	release: {
		options: {
			module : 'cozenAngularGeneratorTest',
			htmlmin: '<%= htmlmin.release.options %>'
		},
		cwd    : '<%= paths.app %>',
		src    : [
			'**/*.html',
			'!index.html',
			'!config/tpls/index.tpl.html'
		],
		dest   : '.tmp/release/template-cache.js'
	}
};