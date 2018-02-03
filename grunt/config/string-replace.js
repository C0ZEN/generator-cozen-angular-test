/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 03/02/2018
 * Time: 15:49
 * Version: 0.0.0
 */
/* eslint key-spacing:"off" */
module.exports = {
	vendors  : {
		options: {
			replacements: [
				{
					pattern    : /(..\/..\/)/gmi,
					replacement: '../../../'
				}
			]
		},
		src    : '<%= paths.app %>/config/tpls/vendors-generated.tpl.html',
		dest   : '<%= paths.app %>/config/tpls/vendors-generated.tpl.html'
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