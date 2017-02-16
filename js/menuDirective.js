angular.module('menuDemo').directive('menu', function() {
				return {
					restrict: "E",
					template: "<div ng-class='{ show: visible, left: alignment === \"left\", right: alignment === \"right\" }' ng-transclude></div>",
					transclude: true,
                    scope: {
                        visible: "=",
                        alignment: "@"
                    }
				};
			});
           
angular.module('menuDemo').directive('menuItem',['$http', function($http) {
                 return {
                     restrict: "E",
                     template: "<div ng-click='navigate()' ng-transclude ></div>",
                     transclude: true,
                     scope: {
						 someCtrlFn: '&callbackFn',
                         hash: "@"
                     },
                     link: function($scope) {
                         $scope.navigate = function() {
							$scope.someCtrlFn({arg1:$scope.hash})
                        }
                     }
                 };
            }]);