/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 31/01/2018
 * Time: 17:45
 * Version: 0.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('generatorCozenAngularTest')
		.config(provider);

	provider.$inject = [
		'$qProvider',
		'config'
	];

	function provider($qProvider, config) {
		$qProvider
			.errorOnUnhandledRejections(config.deferred.errorOnUnhandledRejections);
	}

})(window.angular);