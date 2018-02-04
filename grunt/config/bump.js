/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 03/02/2018
 * Time: 16:15
 * Version: 0.0.0
 */
/* eslint valid-jsdoc:"off" */
module.exports = {
	options: {
		files             : [
			'package.json'
		],
		commit            : true,
		commitMessage     : 'Release <%= newVersionTarget %> <%= newVersion %>',
		commitFiles       : [
			'-a'
		],
		createTag         : false,
		tagName           : '<%= newVersion %>',
		tagMessage        : 'Version <%= newVersion %>',
		push              : false,
		pushTo            : 'origin',
		gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
		globalReplace     : false,
		prereleaseName    : false,
		metadata          : '',
		regExp            : false
	}
};