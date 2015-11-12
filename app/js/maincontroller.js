'use strict'

angular.module('symprap-admin').controller('MainController', ['$scope', '$location', 'OAuth', 
		function($scope, $location, OAuth) {
	
	if (!OAuth.isAuthenticated()) {
		$location.path('login')
		return
	}
	
	$scope.toUsers = function() {
		$location.path('user')
	}
	
	$scope.toDiseases = function() {
		$location.path('disease')
	}
	
	$scope.toQuestions = function() {
		$location.path('question')
	}
}])