angular.module('ng-oauth').provider('OAuthToken', function() {
  var config = {
    name: 'token',
    options: {
      secure: false
    }
  }

  this.configure = function(params) {
    if (!(params instanceof Object)) {
      throw new TypeError('Invalid argument: `config` must be an `Object`.')
    }
    angular.extend(config, params)
    return config
  }

  this.$get = function($cookies) {
    function OAuthToken() {
		
      this.setToken = function(data) {
		return $cookies.putObject(config.name, data, config.options)
      }

      this.getToken= function() {
        return $cookies.getObject(config.name)
      }

      this.getAccessToken = function() {
        return this.getToken() ? this.getToken().access_token : undefined
      }

      this.getAuthorizationHeader = function() {
        if (!(this.getTokenType() && this.getAccessToken())) {
          return
        }

        return `${this.getTokenType().charAt(0).toUpperCase() + this.getTokenType().substr(1)} ${this.getAccessToken()}`
      }

      this.getRefreshToken = function() {
        return this.getToken() ? this.getToken().refresh_token : undefined
      }

      this.getTokenType = function() {
        return this.getToken() ? this.getToken().token_type : undefined
      }

      this.removeToken = function() {
        return $cookies.remove(config.name, config.options)
      }
    }

    return new OAuthToken()
  }
})