'use strict'

angular.module('symprap-admin').controller('QuestionEditController', ['$scope', '$location', '$routeParams', 'QuestionService', 'SymptomService', 
		function($scope, $location, $routeParams, QuestionService, SymptomService) {
	
	var questionId = $routeParams.id
	
	if (questionId) {
		QuestionService.getQuestion(questionId).then(function(result) {
			$scope.question = result.data
			$scope.updateInsteadOfCreate = true
		}, function(error) {
			console.log(error)
		})
	}
	
	$scope.answerTypes = ['TEXT', 'DOUBLE', 'BOOLEAN']
	
	$scope.save = function() {
		console.log($scope.question)
		if ($scope.updateInsteadOfCreate) QuestionService.updateQuestion($scope.question).then($scope.back)
		else QuestionService.createQuestion($scope.question).then($scope.back)
	}
	
	$scope.back = function() {
		$location.path('question')
	}
	
	SymptomService.getSymptoms().then(function(result) {
		$scope.symptoms = result.data
	})
}])