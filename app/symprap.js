'use strict'

var angular = require('angular')
require('angular-cookies')
require('./js/auth/oauth.js')

angular.module('symprap-admin', [require('angular-route'), 'ng-oauth'])
	.config(['$routeProvider', '$httpProvider', 'OAuthProvider', function($routeProvider, $httpProvider, OAuthProvider) {
		OAuthProvider.configure({
			baseUrl: 'https://localhost:8090',
			clientId: 'admin',
			clientSecret: 'test_secret',
			grantPath: '/oauth/token'			
		});
		$httpProvider.defaults.withCredentials = true
		$routeProvider
			.when('/login', {
				templateUrl: '/login.html',
				controller: 'LoginController'
			})
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

require('./js/auth/logincontroller')	
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