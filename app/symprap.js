'use strict'

var angular = require('angular')

angular.module('symprap-admin', [require('angular-route')])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/main', {
				templateUrl: './main.html',
				controller: 'MainController',
			})
			.when('/user', {
				templateUrl: './userlist.html',
				controller: 'UserListController'
			})
			.when('/user/edit', {
				templateUrl: './useredit.html',
				controller: 'UserEditController'
			})
			.when('/user/edit/:id', {
				templateUrl: './edituser.html',
				controller: 'UserEditController'
			})
			.otherwise({
				redirectTo: '/main'
			})
	}])
	
require('./js/user/usereditcontroller')
require('./js/user/userlistcontroller')
require('./js/user/userservice')
require('./js/maincontroller')