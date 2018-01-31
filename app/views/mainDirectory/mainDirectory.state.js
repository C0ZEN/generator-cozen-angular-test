/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 31/01/2018
 * Time: 10:26
 * Version: 0.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('generatorCozenAngularTest')
		.config(mainState);

	mainState.$inject = [
		'$stateProvider'
	];

	function mainState($stateProvider) {
		$stateProvider
			.state('main', {

				url        : '/main',
				templateUrl: 'views/mainDirectory/mainDirectory.template.html',

				controller  : 'mainController',
				controllerAs: 'vm'
			});
	}

})(window.angular);