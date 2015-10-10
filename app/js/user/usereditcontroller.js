'use strict'

var _ = require('lodash')

angular.module('symprap-admin').controller('UserEditController', ['$scope', '$location', '$routeParams', 'UserService', 'SymptomService', 
		function($scope, $location, $routeParams, UserService, SymptomService) {
	
	var userId = $routeParams.id
	
	if (userId) {
		UserService.getUser(userId).then(function(result) {
			$scope.user = result.data
			$scope.updateInsteadOfCreate = true
		}, function(error) {
			console.log(error)
		})
	}
	
	$scope.roles = ['TEEN', 'FOLLOWER', 'ADMIN']
	
	$scope.save = function() {
		var user = $scope.user
		user.symptoms = _(user.symptoms).map(function(symptomId) { 
			return _.find($scope.symptoms, function(symptom) { 
				return symptom.id == symptomId
			})
		}).compact().value()
		console.log(user)
		if ($scope.updateInsteadOfCreate) UserService.updateUser(user).then($scope.back)
		else UserService.createUser(user).then($scope.back)
	}
	
	$scope.back = function() {
		$location.path('user')
	}
	
	SymptomService.getSymptoms().then(function(result) {
		$scope.symptoms = result.data
	})
}])