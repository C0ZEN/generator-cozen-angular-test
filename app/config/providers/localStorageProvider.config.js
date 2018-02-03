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
		'localStorageServiceProvider',
		'config'
	];

	function provider(localStorageServiceProvider, config) {
		localStorageServiceProvider
			.setPrefix(config.app.name)
			.setStorageType('localStorage')
			.setDefaultToCookie(false)
			.setNotify(false, false);
	}

})(window.angular);