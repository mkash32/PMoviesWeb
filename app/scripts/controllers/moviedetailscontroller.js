'use strict';

/**
 * @ngdoc function
 * @name pmoviesWebApp.controller:MoviedetailscontrollerCtrl
 * @description
 * # MoviedetailscontrollerCtrl
 * Controller of the pmoviesWebApp
 */
angular.module('pmoviesWebApp')
  .controller('movieDetailsCtrl', ['$scope', '$routeParams', 'requestServ', function ($scope,$routeParams,requestServ) {
  		$scope.movieId = $routeParams.movieId;
  		$scope.movieDetails ={};
  		$scope.details = "nothing";
		function successCallback(response){
			$scope.movieDetails = response.data;
			$scope.details = JSON.stringify(response.data);
		}
		function errorCallback(response){

		}
		requestServ.getMovieDetails($scope.movieId,successCallback,errorCallback);
  }]);
