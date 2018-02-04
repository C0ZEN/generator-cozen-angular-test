/**
 * Generated header by Geoffrey Testelin for generator-cozen-angular-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 03/02/2018
 * Time: 16:21
 * Version: 0.1.0
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
			    
			    
                url         : '/main',
				templateUrl : 'views/main/main.template.html',
				
				controller  : 'mainController',
				controllerAs: 'vm'
			});
	}

})(window.angular);