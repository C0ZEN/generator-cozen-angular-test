/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 03/02/2018
 * Time: 13:32
 * Version: 0.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('generatorCozenAngularTest')
		.config(provider);

	provider.$inject = [
		'$locationProvider',
		'config'
	];

	function provider($locationProvider, config) {
		$locationProvider
			.html5Mode({
				enabled    : config.html5Mode.enabled,
				requireBase: config.html5Mode.requireBase
			})
			.hashPrefix(config.hashPrefix);
	}

})(window.angular);