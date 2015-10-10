'use strict'

angular.module('symprap-admin').factory('UserService', ['$http', function($http) {
	
	var userUrl = "http://localhost:8090/user/"
	
	return {
		createUser : function(user) {
			return $http.post(userUrl + 'create', user)
		},
		getUsers : function() {
			return $http.get(userUrl + 'all')
		}
	}
}])