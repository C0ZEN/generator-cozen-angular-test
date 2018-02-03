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
	options: {
		minifyCSS                  : true,
		minifyJS                   : true,
		removeComments             : true,
		useShortDoctype            : true,
		sortAttributes             : true,
		sortClassName              : true,
		decodeEntities             : true,
		collapseWhitespace         : true,
		removeAttributeQuotes      : true,
		collapseInlineTagWhitespace: true
	},
	dev    : {
		files: [
			{
				expand: true,
				cwd   : '<%= paths.app %>',
				src   : 'index.html',
				dest  : '<%= paths.app %>'
			}
		]
	},
	release: {
		files: [
			{
				expand: true,
				cwd   : '<%= currentTarget %>',
				src   : 'index.html',
				dest  : '<%= currentTarget %>'
			}
		]
	}
};