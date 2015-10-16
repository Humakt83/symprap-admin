'use strict'

var angular = require('angular')

angular.module('symprap-admin', [require('angular-route')])
	.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
		$httpProvider.defaults.withCredentials = true
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
			.when('/disease', {
				templateUrl: './diseaselist.html',
				controller: 'DiseaseListController'
			})
			.when('/disease/edit', {
				templateUrl: './diseaseedit.html',
				controller: 'DiseaseEditController'
			})
			.when('/disease/edit/:id', {
				templateUrl: './diseaseedit.html',
				controller: 'DiseaseEditController'
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

require('./js/disease/diseaseeditcontroller')
require('./js/disease/diseaselistcontroller')
require('./js/disease/diseaseservice')
require('./js/user/usereditcontroller')
require('./js/user/userlistcontroller')
require('./js/user/userservice')
require('./js/question/questioneditcontroller')
require('./js/question/questionlistcontroller')
require('./js/question/questionservice')
require('./js/maincontroller')