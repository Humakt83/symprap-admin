'use strict'

angular.module('symprap-admin').controller('QuestionListController', ['$scope', '$location', 'QuestionService', function($scope, $location, QuestionService) {
	
	QuestionService.getQuestions().then(function(result) {
		console.log(result)
		$scope.questions = result.data
	})
	
	$scope.createQuestion = function() {
		$location.path('question/edit')
	}
	
	$scope.back = function() {
		$location.path('')
	}
}])