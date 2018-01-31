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
		'$compileProvider',
		'config'
	];

	function provider($compileProvider, config) {
		$compileProvider
			.debugInfoEnabled(config.debug.compile)
			.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
	}

})(window.angular);