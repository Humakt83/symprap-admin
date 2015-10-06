'use strict'

angular.module('symprap-admin').controller('SymptomListController', ['$scope', '$location', 'SymptomService', function($scope, $location, SymptomService) {
	
	SymptomService.getSymptoms().then(function(result) {
		console.log(result)
		$scope.symptoms = result.data
	})
	
	$scope.createSymptom = function() {
		$location.path('symptom/edit')
	}
}])