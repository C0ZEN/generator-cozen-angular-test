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
			collapseBooleanAttributes: true,
			collapseWhitespace       : true,
			removeAttributeQuotes    : true,
			removeComments           : true,
			removeCommentsFromCDATA  : true
		},
		files  : [
			{
				expand: true,
				cwd   : '<%= paths.app %>',
				src   : 'index.html',
				dest  : '<%= paths.app %>'
			}
		]
	},
	release: {
		options: '<%= htmlmin.dev.options %>',
		files  : [
			{
				expand: true,
				cwd   : '<%= currentTarget %>',
				src   : 'index.html',
				dest  : '<%= currentTarget %>'
			}
		]
	}
};