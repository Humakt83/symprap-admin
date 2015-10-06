'use strict'

angular.module('symprap-admin').controller('SymptomEditController', ['$scope', '$location', 'SymptomService', function($scope, $location, SymptomService) {
	
	$scope.save = function() {
		console.log($scope.symptom)
		SymptomService.createSymptom($scope.symptom)
	}
	
	$scope.back = function() {
		$location.path('symptom')
	}
}])