'use strict'

var _ = require('lodash')

angular.module('symprap-admin').controller('UserEditController', ['$scope', '$location', '$routeParams', 'UserService', 'DiseaseService', 
		function($scope, $location, $routeParams, UserService, DiseaseService) {
	
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
		user.diseases = _(user.diseases).map(function(diseaseId) { 
			return _.find($scope.diseases, function(disease) { 
				return disease.id == diseaseId
			})
		}).compact().value()
		console.log(user)
		if ($scope.updateInsteadOfCreate) UserService.updateUser(user).then($scope.back)
		else UserService.createUser(user).then($scope.back)
	}
	
	$scope.back = function() {
		$location.path('user')
	}
	
	DiseaseService.getDiseases().then(function(result) {
		$scope.diseases = result.data
	})
}])