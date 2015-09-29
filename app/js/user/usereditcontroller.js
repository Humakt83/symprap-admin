'use strict'

angular.module('symprap-admin').controller('UserEditController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
	
	$scope.save = function() {
		console.log($scope.user)
		UserService.createUser($scope.user)
	}
	
	$scope.back = function() {
		$location.path('user')
	}
}])