'use strict'

angular.module('symprap-admin').controller('UserListController', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
	
	UserService.getUsers().then(function(result) {
		console.log(result)
		$scope.users = result.data
	})
	
	$scope.createUser = function() {
		$location.path('user/edit')
	}
	
}])