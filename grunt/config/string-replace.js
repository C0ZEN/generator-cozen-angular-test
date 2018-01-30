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
	devIndex: {
		options: {
			replacements: [
				{
					pattern    : /(..\/..\/)/gmi,
					replacement: ''
				}
			]
		},
		expand : true,
		cwd    : '<%= paths.app %>',
		src    : 'index.html',
		dest   : '<%= paths.app %>'
	},
	index   : {
		options: '<%= string-replace.devIndex.options %>',
		expand : true,
		cwd    : '<%= currentTarget %>',
		src    : 'index.html',
		dest   : '<%= currentTarget %>'
	},
	cssPaths: {
		options: {
			replacements: [
				{
					pattern    : /(\.\.\/)+/gmi,
					replacement: '../'
				}
			]
		},
		files  : {
			'<%= currentTarget %>/styles/cozen-angular-generator-test.css'    : '<%= currentTarget %>/styles/cozen-angular-generator-test.css',
			'<%= currentTarget %>/styles/cozen-angular-generator-test.min.css': '<%= currentTarget %>/styles/cozen-angular-generator-test.min.css'
		}
	},
	changelog: {
		src    : 'CHANGELOG.md',
		dest   : 'CHANGELOG.md',
		options: {
			replacements: [
				{
                    pattern    : /(\#\# \[Unreleased\])/g, // eslint-disable-line
					replacement: '## [Unreleased]\n\n## [<%= newVersion %>]'
				}
			]
		}
	}
};