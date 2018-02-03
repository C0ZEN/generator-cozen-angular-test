module.exports = function (grunt) {
	grunt.registerTask('internal.release', 'Create a new stable version ezfez', () => {
		grunt.task.run([
			'npm-command:test',
			'clean:release',
			'clean:devIndex',
			'preprocess:' + grunt.config.get('currentTarget'),
			'preprocess:manifest',
			'preprocess:structuredData',
			'jsMin:release',
			'less:main',
			'languages:release',
			'postcss:dev',
			'cssmin:dev',
			'vendors',
			'postcss:vendors',
			'cssmin:vendors',
			'copy:vendorsJs',
			'htmlmin:release',
			'copy:release',
			'copy:i18n',
			'copy:medias',
			'imagemin:release',
			'string-replace:cssPaths',
			'notify:release'
		]);
	});
};