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
	server : [
		'copy:styles'
	],
	test   : [
		'copy:styles'
	],
	release: [
		'copy:release',
		'copy:components',
		'imagemin:release'
	]
};