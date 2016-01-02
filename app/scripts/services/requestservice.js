'use strict';

/**
 * @ngdoc service
 * @name pmoviesWebApp.requestService
 * @description
 * # requestService
 * Service in the pmoviesWebApp.
 */
  angular.module('pmoviesWebApp')
	.constant('constant',{
		API_KEY : 'api_key=', //insert you api_key here
		POPULAR_MOVIES : 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&',
		HIGHEST_RATED : 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&',
		BACKDROP_PATH : 'http://image.tmdb.org/t/p/w185/',
		MOVIE_DETAILS_PATH: 'https://api.themoviedb.org/3/movie/#?' //replace # with movie id
	})
	.service('URLs', ['constant', function(constant){
		this.POPULAR_MOVIES = constant.POPULAR_MOVIES+constant.API_KEY;
		this.HIGHEST_RATED = constant.HIGHEST_RATED+constant.API_KEY;
		this.MOVIE_DETAILS_PATH = constant.MOVIE_DETAILS_PATH+constant.API_KEY;
	}])
	.factory('requestServ', ['$http','URLs', function($http,urls){
		var url = null;
		var i = 0;

			function getRequest(url,successCallback,errorCallback){
				var response =$http({
					method: 'GET',
					url: url,
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(successCallback,errorCallback);
		}

		return {
				getPopularMovies: function(successCallback,errorCallback){
					return getRequest(urls.POPULAR_MOVIES, successCallback, errorCallback);
				},
				getHighestRatedMovies: function(successCallback,errorCallback){
					return getRequest(urls.HIGHEST_RATED, successCallback, errorCallback);	
				},
				getMovieDetails: function(movieId,successCallback,errorCallback){
					var url = urls.MOVIE_DETAILS_PATH.replace('#',movieId);
					return getRequest(url,successCallback,errorCallback)
				}
		};
	}]);
