'use strict'

var _ = require('lodash')

angular.module('symprap-admin').controller('UserEditController', ['$scope', '$location', 'UserService', 'SymptomService', 
		function($scope, $location, UserService, SymptomService) {			
	
	$scope.roles = ['TEEN', 'FOLLOWER', 'ADMIN']
	
	$scope.save = function() {
		var user = $scope.user
		user.symptoms = _(user.symptoms).map(function(symptomId) { 
			return _.find($scope.symptoms, function(symptom) { 
				return symptom.id == symptomId
			})
		}).compact().value()
		console.log(user)
		UserService.createUser(user).then($scope.back)
	}
	
	$scope.back = function() {
		$location.path('user')
	}
	
	SymptomService.getSymptoms().then(function(result) {
		$scope.symptoms = result.data
	})
}])