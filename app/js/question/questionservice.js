'use strict'

angular.module('symprap-admin').factory('QuestionService', ['$http', function($http) {
	
	var questionUrl = "https://localhost:8090/question/"
	
	return {
		createQuestion : function(question) {
			return $http.post(questionUrl + 'create', question)
		},
		getQuestions : function() {
			return $http.get(questionUrl + 'all')
		},
		getQuestion : function(id) {
			return $http.get(questionUrl + id)
		},
		updateQuestion : function(question) {
			return $http.put(questionUrl + 'update', question)
		}
	}
}])