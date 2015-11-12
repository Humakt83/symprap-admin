angular.module('ng-oauth', ['ngCookies'])
	.config(function($httpProvider) {
		$httpProvider.interceptors.push('oauthInterceptor')
	})

require('./oauthprovider');
require('./oauthtokenprovider');
require('./oauthinterceptor');
