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
				templateUrl: './useredit.html',
				controller: 'UserEditController'
			})
			.when('/symptom', {
				templateUrl: './symptomlist.html',
				controller: 'SymptomListController'
			})
			.when('/symptom/edit', {
				templateUrl: './symptomedit.html',
				controller: 'SymptomEditController'
			})
			.when('/symptom/edit/:id', {
				templateUrl: './symptomedit.html',
				controller: 'SymptomEditController'
			})
			.when('/question', {
				templateUrl: './questionlist.html',
				controller: 'QuestionListController'
			})
			.when('/question/edit', {
				templateUrl: './questionedit.html',
				controller: 'QuestionEditController'
			})
			.when('/question/edit/:id', {
				templateUrl: './questionedit.html',
				controller: 'QuestionEditController'
			})
			.otherwise({
				redirectTo: '/main'
			})
	}])

require('./js/symptom/symptomeditcontroller')
require('./js/symptom/symptomlistcontroller')
require('./js/symptom/symptomservice')
require('./js/user/usereditcontroller')
require('./js/user/userlistcontroller')
require('./js/user/userservice')
require('./js/question/questioneditcontroller')
require('./js/question/questionlistcontroller')
require('./js/question/questionservice')
require('./js/maincontroller')