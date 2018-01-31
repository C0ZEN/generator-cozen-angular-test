module.exports = function (grunt) {
	grunt.registerTask('internal.release', 'Create a new stable version ezfez', () => {
		grunt.task.run([
			'npm-command:test',
			'clean:release',
			'clean:devIndex',
			'wiredep',
			'preprocess:' + grunt.config.get('currentTarget'),
			'preprocess:manifest',
			'preprocess:structuredData',
			'jsMin:release',
			'less:main',
			'languages:release',
			'postcss:dev',
			'cssmin:dev',
			'string-replace:index',
			'useminPrepare',
			'usemin',
			'concat:generated',
			'concat:vendors',
			'postcss:vendors',
			'cssmin:vendors',
			'htmlmin:release',
			'copy:release',
			'copy:i18n',
			'imagemin:release',
			'string-replace:cssPaths',
			'notify:release'
		]);
	});
};