'use strict'

angular.module('symprap-admin').factory('SymptomService', ['$http', function($http) {
	
	var symptomUrl = "http://localhost:8090/symptom/"
	
	return {
		createSymptom : function(symptom) {
			return $http.post(symptomUrl + 'create', symptom)
		},
		getSymptoms : function() {
			return $http.get(symptomUrl + 'all')
		}
	}
}])