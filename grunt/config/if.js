/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 31/01/2018
 * Time: 09:58
 * Version: 0.0.0
 */
/* eslint valid-jsdoc:"off" */
module.exports = function (grunt) {
	return {
		isChangelogUpdated: {
			options: {
				test() {
					return grunt.config.get('isChangelogUpdated');
				}
			},
			ifTrue: [
				'prompt:chooseRelease',
				'prompt:confirmRelease',
				'if:isReleaseConfirmed'
			],
			ifFalse: [
				'internal.changelogRequired'
			]
		},
		isReleaseConfirmed: {
			options: {
				test() {
					return grunt.config.get('isReleaseConfirmed');
				}
			},
			ifTrue: [
				'gitcheckout:develop',
				'string-replace:changelog',
				'internal.bump',
				'gitpush:develop',
				'gitcheckout:master',
				'gitmerge:develop',
				'gittag:release',
				'gitpush:master',
				'gitcheckout:develop'
			]
		}
	};
};