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
			'<%= currentTarget %>/styles/generator-cozen-angular-test.css'    : '<%= currentTarget %>/styles/generator-cozen-angular-test.css',
			'<%= currentTarget %>/styles/generator-cozen-angular-test.min.css': '<%= currentTarget %>/styles/generator-cozen-angular-test.min.css'
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