'use strict'

angular.module('symprap-admin').controller('MainController', ['$scope', '$location', function($scope, $location) {
	
	$scope.toUsers = function() {
		$location.path('user')
	}
	
	$scope.toSymptoms = function() {
		$location.path('symptom')
	}
	
	$scope.toQuestions = function() {
		$location.path('question')
	}
}])