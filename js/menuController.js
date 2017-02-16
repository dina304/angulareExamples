angular.module('menuDemo').controller('menuCtrl',modalDemoCtrl);
function modalDemoCtrl($scope, $rootScope,$http) {
	$scope.leftVisible = true;
	$scope.dataVisability=false;
	$http.get('data/menuItems.json')
		.success(function(data) {
				console.log(data);
				$scope.menuItems=data.menu;
				})
		.error(function() {
				alert("error");
			});
	$scope.getDataFunction=function(hash) {
         $http.get('data/people_'+hash+'.json')
			.success(function(data) {
				console.log(data);
				$scope.dataVisability=true;
				$scope.people=data.person;
				})
			.error(function() {
				alert("error");
			});
		};
};