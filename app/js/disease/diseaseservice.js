'use strict'

angular.module('symprap-admin').factory('DiseaseService', ['$http', function($http) {
	
	var diseaseUrl = "https://localhost:8090/disease/"
	
	return {
		createDisease : function(disease) {
			return $http.post(diseaseUrl + 'create', disease)
		},
		getDiseases : function() {
			return $http.get(diseaseUrl + 'all')
		},
		getDisease : function(id) {
			return $http.get(diseaseUrl + id)
		},
		updateDisease : function(disease) {
			return $http.put(diseaseUrl + 'update', disease)
		}
	}
}])