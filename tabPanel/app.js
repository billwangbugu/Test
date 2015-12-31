		angular.module('myApp', [])
		.controller('myCtrl',function($scope){
			$scope.provinces=[
				{name:'Ontario',description:'The province is named after Lake Ontario, a term thought to be derived from Ontarí:io, a Huron (Wyandot) word meaning "great lake", or possibly skanadario, which means "beautiful water" in the Iroquoian languages. Ontario has about 250,000 freshwater lakes.'},
				{name:'Quebec',description:'The name "Québec", which comes from the Algonquin word kébec meaning "where the river narrows", originally referred to the area around Quebec City where the Saint Lawrence River narrows to a cliff-lined gap. Early variations in the spelling of the name included Québecq (Levasseur, 1601) and Kébec (Lescarbot, 1609). French explorer Samuel de Champlain chose the name Québec in 1608 for the colonial outpost he would use as the administrative seat for the French colony of New France. The province is sometimes referred to as "La belle province" ("The beautiful province").'},
				{name:'Alberta',description:'Alberta is bounded by the provinces of British Columbia to the west and Saskatchewan to the east, the Northwest Territories to the north, and the US state of Montana to the south. Alberta is one of three Canadian provinces and territories to border only a single US state and one of only two landlocked provinces. It has a predominantly Humid continental climate, but seasonal temperature average swings are smaller than to areas further east, with winters being warmed by occasional chinook winds bringing sudden warming which moderates average temperatures.'},
				{name:'British Columbia',description:'British Columbia evolved from British possessions that were established in what is now British Columbia by 1871. First Nations, the original inhabitants of the land, have a history of at least 10,000 years in the area. Today there are few treaties and the question of Aboriginal Title, long ignored, has become a legal and political question of frequent debate as a result of recent court actions. Notably, the Tsilhqot\'in Nation has established Aboriginal title to a portion of their territory, as a result of the recent Supreme Court of Canada decision (Tsilhqot\'in Nation v. British Columbia).'}
			]
		})
		.directive('myTabs', function() {
		  return {
		    restrict: 'E',
		    transclude: true,
		    scope: {},
		    controller: ['$scope', function($scope) {
		      var panes = $scope.panes = [];

		      $scope.select = function(pane) {
		        angular.forEach(panes, function(pane) {
		          pane.selected = false;
		        });
		        pane.selected = true;
		      };

		      this.addPane = function(pane) {
		        if (panes.length === 0) {
		          $scope.select(pane);
		        }
		        panes.push(pane);
		      };
		    }],
		    templateUrl: 'my-tabs.html'
		  };
		})
		.directive('myPane', function() {
		  return {
		    require: '^myTabs',
		    restrict: 'E',
		    transclude: true,
		    scope: {
		      title: '@'
		    },
		    link: function(scope, element, attrs, tabsCtrl) {
		      tabsCtrl.addPane(scope);

		      element.css({
		      	color:'#006699'
		      });
		    },
		    templateUrl: 'my-pane.html'
		  };
		});