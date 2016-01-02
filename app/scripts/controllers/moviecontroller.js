'use strict';

/**
 * @ngdoc function
 * @name pmoviesWebApp.controller:MoviecontrollerCtrl
 * @description
 * # MoviecontrollerCtrl
 * Controller of the pmoviesWebApp
 */
  angular.module('pmoviesWebApp')
	.controller('movieCtrl', ['$scope','requestServ','$filter', function($scope,requestServ,$filter){		
		$scope.movieData =[];
		$scope.backdropPath='http://image.tmdb.org/t/p/w185';

		function getMatches(searchText)
		{
			var hey = $filter('filter')(movieData,searchText);
			alert('here');
			return $filter('filter')(movieData,searchText);
		}

		function successCallback(response){
			$scope.movieData = response.data.results;
		}

		function errorCallback(response){
			console.log("Request failed:(movieController) "+JSON.stringify(response));
		}

		$scope.getMovies = function(){
			requestServ.getPopularMovies(successCallback,errorCallback);
		}
		$scope.printData = function(){
			alert(JSON.stringify($scope.movieData));
		}
		$scope.hey = function(){
			alert("hey");
		}

		//on initialization
		$scope.getMovies();

	}]);
