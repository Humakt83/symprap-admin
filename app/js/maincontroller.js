'use strict'

angular.module('symprap-admin').controller('MainController', ['$scope', '$location', function($scope, $location) {
	
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