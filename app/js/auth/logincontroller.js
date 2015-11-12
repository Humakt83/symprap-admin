'use strict'

angular.module('symprap-admin').controller('LoginController', ['$scope', '$location', 'OAuth',
		function($scope, $location, OAuth) {
	
	$scope.login = function() {
		OAuth.getAccessToken({username: $scope.user, password: $scope.pass})
			.then(function() {
				$location.path('')
			}, function(error) {
				console.log(error)
			})
	}
}])