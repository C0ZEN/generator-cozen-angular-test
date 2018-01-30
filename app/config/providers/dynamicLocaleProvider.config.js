/**
 * Generated header by Geoffrey Testelin for cozen-angular-generator-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 30/01/2018
 * Time: 21:43
 * Version: 0.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('cozenAngularGeneratorTest')
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