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