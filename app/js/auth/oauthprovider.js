var queryString = require('query-string')

var defaults = {
  baseUrl: null,
  clientId: null,
  clientSecret: null,
  grantPath: '/oauth2/token',
  revokePath: '/oauth2/revoke'
};

var requiredKeys = [
  'baseUrl',
  'clientId',
  'grantPath',
  'revokePath'
];

angular.module('ng-oauth').provider('OAuth', function() {
	var config

	this.configure = function(params) {
		if (config) {
			throw new Error('Already configured.')
		}
		if (!(params instanceof Object)) {
			throw new TypeError('Invalid argument: `config` must be an `Object`.')
		}
		config = angular.extend({}, defaults, params)
		angular.forEach(requiredKeys, (key) => {
			if (!config[key]) {
				throw new Error(`Missing parameter: ${key}.`)
			}
		})

		if('/' === config.baseUrl.substr(-1)) {
			config.baseUrl = config.baseUrl.slice(0, -1)
		}

		if('/' !== config.grantPath[0]) {
			config.grantPath = `/${config.grantPath}`
		}

		if('/' !== config.revokePath[0]) {
			config.revokePath = `/${config.revokePath}`
		}

		return config;
	}

	this.$get = function($http, OAuthToken) {
		function OAuth() {
			if (!config) {
				throw new Error('`OAuthProvider` must be configured first.')
			}

			this.isAuthenticated = function() {
				return !!OAuthToken.getToken()
			}

			this.getAccessToken = function(user, options) {
				if (!user || !user.username || !user.password) {
					throw new Error('`user` must be an object with `username` and `password` properties.')
				}

				var data = {
					client_id: config.clientId,
					grant_type: 'password',
					username: user.username,
					password: user.password
				}

				data.client_secret = config.clientSecret;

				data = queryString.stringify(data);

				options = angular.extend({
					headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'Authorization': 'Basic ' + btoa(config.clientId + ':' + config.clientSecret)}
				}, options)

				return $http.post(`${config.baseUrl}${config.grantPath}`, data, options).then((response) => {
					OAuthToken.setToken(response.data);
					return response;
				})
			}

			this.getRefreshToken = function() {
				var data = {
					client_id: config.clientId,
					grant_type: 'refresh_token',
					refresh_token: OAuthToken.getRefreshToken(),
				}

				data.client_secret = config.clientSecret;

				data = queryString.stringify(data);

				var options = {
					headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'Authorization': 'Basic ' + btoa(config.clientId + ':' + config.clientSecret)}
				}

				return $http.post(`${config.baseUrl}${config.grantPath}`, data, options).then((response) => {
					OAuthToken.setToken(response.data);
					return response;
				})
			}

			this.revokeToken = function() {
				var data = queryString.stringify({
					token: OAuthToken.getRefreshToken() ? OAuthToken.getRefreshToken() : OAuthToken.getAccessToken()
				})

				var options = {
					headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
								'Authorization': 'Basic ' + btoa(config.clientId + ':' + config.clientSecret)}
				}

				return $http.post(`${config.baseUrl}${config.revokePath}`, data, options).then((response) => {
					OAuthToken.removeToken()
					return response
				})
			}
		}

		return new OAuth()
	}
})