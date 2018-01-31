/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 31/01/2018
 * Time: 09:58
 * Version: 0.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('generatorCozenAngularTest')
		.config(provider);

	provider.$inject = [
		'tmhDynamicLocaleProvider',
		'config'
	];

	function provider(tmhDynamicLocaleProvider, config) {
		tmhDynamicLocaleProvider
			.localeLocationPattern(config.localeLocationPattern);
	}

})(window.angular);