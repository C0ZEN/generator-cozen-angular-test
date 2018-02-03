/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 03/02/2018
 * Time: 15:49
 * Version: 0.0.0
 */
/* eslint valid-jsdoc:"off" */
/* eslint key-spacing:"off" */
module.exports = {
	html: {
		options: {
			pretty: true
		},
		files  : [
			{
				cwd   : '<%= paths.app %>',
				src   : '**/*.pug',
				dest  : '<%= paths.app %>',
				expand: true,
				rename: ($dest, $src) => {
					return ($dest + '/' + $src).replace('.pug', '.html');
				}
			}
		]
	}
};