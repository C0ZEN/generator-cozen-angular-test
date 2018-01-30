/**
 * Generated header by Geoffrey Testelin for cozen-angular-generator-test project
 * Created with: generator-cozen-angular
 *
 * Created by: Geoffrey Testelin
 * Date: 30/01/2018
 * Time: 22:06
 * Version: 0.0.0
 */
(function (angular) {
	'use strict';

	angular
		.module('cozenAngularGeneratorTest')
		.config(mainDirectoryState);

	mainDirectoryState.$inject = [
		'$stateProvider'
	];

	function mainDirectoryState($stateProvider) {
		$stateProvider
			.state('main', {
				url         : '/main',
				templateUrl : 'views/mainDirectory/mainDirectory.template.html',
				controller  : 'mainDirectoryController',
				controllerAs: 'vm'
			});
	}

})(window.angular);