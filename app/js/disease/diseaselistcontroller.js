'use strict'

angular.module('symprap-admin').controller('DiseaseListController', ['$scope', '$location', 'DiseaseService', 
		function($scope, $location, DiseaseService) {
	
	DiseaseService.getDiseases().then(function(result) {
		console.log(result)
		$scope.diseases = result.data
	})
	
	$scope.createDisease = function() {
		$location.path('disease/edit')
	}
	
	$scope.back = function() {
		$location.path('')
	}
}])