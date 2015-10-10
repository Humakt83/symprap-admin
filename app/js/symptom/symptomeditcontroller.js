'use strict'

angular.module('symprap-admin').controller('SymptomEditController', ['$scope', '$location', '$routeParams', 'SymptomService', 
		function($scope, $location, $routeParams, SymptomService) {
	
	var symptomId = $routeParams.id
	if (symptomId) {
		SymptomService.getSymptom(symptomId).then(function(result) {
			$scope.symptom = result.data
			$scope.updateInsteadOfCreate = true
		}, function(error) {
			console.log(error)
		})
	}
	
	$scope.save = function() {
		console.log($scope.symptom)
		if ($scope.updateInsteadOfCreate)
			SymptomService.updateSymptom($scope.symptom).then($scope.back)
		else
			SymptomService.createSymptom($scope.symptom).then($scope.back)
	}
	
	$scope.back = function() {
		$location.path('symptom')
	}
}])