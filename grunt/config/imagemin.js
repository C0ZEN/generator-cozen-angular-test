/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 03/02/2018
 * Time: 16:15
 * Version: 0.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	release: {
		options: {
			optimizationLevel: 5,
			progressive      : true,
			interlaced       : true
		},
		files  : [
			{
				expand: true,
				cwd   : '<%= paths.app %>/images',
				src   : '**/*.{png,jpg,jpeg,gif,svg,ico}',
				dest  : '<%= currentTarget %>/images'
			}
		]
	}
};