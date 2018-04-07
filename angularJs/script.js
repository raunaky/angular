(function(){


	var app = angular.module('githubViewer',[]);
	var MainController = function($scope,$http){

		$scope.search = function(username){
			console.log($scope.username);
			getUser(username);
			
		};

		var getUser = function(username){
			return $http.get('https://api.github.com/users/' + username + '/repos').then(onUserComplete,onError);
		};

		var onUserComplete = function(response){
			return $scope.users = response.data;
		};
		
		var onError = function(){
			$scope.error = 'Could not load ...';
			 	
		}

		return{
			getUser :getUser
		}




	$scope.message = 'Github Viewer !';
	$scope.username = 'angular';
	$scope.repoSortOrder = '-stargazers_count';
	};

	app.controller('MainController',MainController);

}());