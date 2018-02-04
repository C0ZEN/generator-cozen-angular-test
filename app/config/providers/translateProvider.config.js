/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 03/02/2018
 * Time: 16:15
 * Version: 0.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('generatorCozenAngularTest')
		.config(provider);

	provider.$inject = [
		'$translateProvider',
		'config'
	];

	function provider($translateProvider, config) {
		$translateProvider
			.useSanitizeValueStrategy(config.useSanitizeValueStrategy)
			.useStaticFilesLoader({
				prefix: config.useStaticFilesLoader.prefix,
				suffix: config.useStaticFilesLoader.suffix
			})
			.preferredLanguage(config.languages.defaultLanguage);
	}

})(window.angular);