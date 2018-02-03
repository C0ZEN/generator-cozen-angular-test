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
		'logExProvider',
		'config'
	];

	function provider(logExProvider, config) {
		logExProvider.enableLogging(config.debug.logs.enabled);
		logExProvider.disableDefaultColors(!config.debug.logs.enhancedColors);
		logExProvider.overrideLogPrefix(className => {
			const $injector       = angular.injector([
				'ng'
			]);
			const $filter         = $injector.get('$filter');
			const separator       = config.debug.logs.separator;
			const classNameBefore = config.debug.logs.classNameBefore;
			const classNameAfter  = config.debug.logs.classNameAfter;
			const format          = config.debug.logs.format;
			const now             = String($filter('date')(new Date(), format));
			return now + (!angular.isString(className) ? '' : classNameBefore + className + classNameAfter + separator);
		});
		logExProvider.restrictLogMethods(config.debug.logs.restrictedMethods);
		logExProvider.useTemplates(true);
	}

})(window.angular);