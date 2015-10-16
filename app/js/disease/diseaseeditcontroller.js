'use strict'

angular.module('symprap-admin').controller('DiseaseEditController', ['$scope', '$location', '$routeParams', 'DiseaseService', 
		function($scope, $location, $routeParams, DiseaseService) {
	
	var diseaseId = $routeParams.id
	if (diseaseId) {
		DiseaseService.getDisease(diseaseId).then(function(result) {
			$scope.disease = result.data
			$scope.updateInsteadOfCreate = true
		}, function(error) {
			console.log(error)
		})
	}
	
	$scope.save = function() {
		console.log($scope.disease)
		if ($scope.updateInsteadOfCreate)
			DiseaseService.updateDisease($scope.disease).then($scope.back)
		else
			DiseaseService.createDisease($scope.disease).then($scope.back)
	}
	
	$scope.back = function() {
		$location.path('disease')
	}
}])