var myApp=angular.module("riskApp",[]);

myApp.controller("riskCtrl", function($scope,$timeout){

$scope.sets = [ 
	{"setId": "1",
	"clustered":"CombinA", 
	"scores": [
		{"cell":"1-1","value":1},
		{"cell":"1-2","value":0.67},
		{"cell":"1-3","value":0},
		{"cell":"1-4","value":0.67},
		{"cell":"1-5","value":0.67},
		{"cell":"1-6","value":1},
		{"cell":"1-7","value":0	}
	]	
	},
	{ 
	"setId": "2",
	"clustered":"CombinA", 
	"scores": [{
		"cell":"2-1","value":0.67},
		{"cell":"2-2","value":1.00},
		{"cell":"2-3","value":0},
		{"cell":"2-4","value":0},
		{"cell":"2-5","value":0},
		{"cell":"2-6","value":0.67},
		{"cell":"2-7","value":0}]	
	},
	{ 
	"setId": "3",
	"clustered":"noCl", 
	"scores": [{
		"cell":"3-1","value":0},
		{"cell":"3-2","value":0},
		{"cell":"3-3","value":1.00},
		{"cell":"3-4","value":0.33},
		{"cell":"3-5","value":0.67},
		{"cell":"3-6","value":0},
		{"cell":"3-7","value":0.33
		}	]
	},
 { 
	"setId": "4",
	"clustered":"noCl", 
	"scores": [{
		"cell":"4-1","value":0.67},
		{"cell":"4-2","value":0},
		{"cell":"4-3","value":0.33},
		{"cell":"4-4","value":1.00},
		{"cell":"4-5","value":0.67},
		{"cell":"4-6","value":0.67},
		{"cell":"4-7","value":0
		}]	
	},
	{ 
	"setId": "5",
	"clustered":"CombinB", 
	"scores": [{
		"cell":"5-1","value":0.67},
		{"cell":"5-2","value":0},
		{"cell":"5-3","value":0.67},
		{"cell":"5-4","value":0.67},
		{"cell":"5-5","value":1.00},
		{"cell":"5-6","value":0.67},
		{"cell":"5-7","value":1.00
		}]	
	},
	{ 
	"setId": "6",
	"clustered":"CombinA", 
	"scores": [{
		"cell":"6-1","value":1.00},
		{"cell":"6-2","value":0.67},
		{"cell":"6-3","value":0},
		{"cell":"6-4","value":0.67},
		{"cell":"6-5","value":0.67},
		{"cell":"6-6","value":1.00},
		{"cell":"6-7","value":0
		}]	
	},
	{ 
	"setId": "7",
	"clustered":"CombinB", 
	"scores": [{
		"cell":"7-1","value":0},
		{"cell":"7-2","value":0},
		{"cell":"7-3","value":0.33},
		{"cell":"7-4","value":0},
		{"cell":"7-5","value":1.00},
		{"cell":"7-6","value":0},
		{"cell":"7-7","value":1.00
		}]	
}
];
$scope.chartSets=createChartSets($scope.sets);
$scope.setNames=chartSetName($scope.chartSets);

var Set8=[ 
	{"setId": "8",
	"clustered":"noCl", 
	"scores": [
		{"cell":"8-1","value":1},
		{"cell":"8-2","value":0.67},
		{"cell":"8-3","value":0},
		{"cell":"8-4","value":0.67},
		{"cell":"8-5","value":0.67},
		{"cell":"8-6","value":1},
		{"cell":"8-7","value":0	},
		{"cell":"8-8","value":1	}
		]	
	}
];

var Set9=[ 
	{"setId": "9",
	"clustered":"CombinB", 
	"scores": [
		{"cell":"9-1","value":0.67},
		{"cell":"9-2","value":0.67},
		{"cell":"9-3","value":0},
		{"cell":"9-4","value":0.67},
		{"cell":"9-5","value":0.67},
		{"cell":"9-6","value":0.33},
		{"cell":"9-7","value":0.67	},
		{"cell":"9-8","value":0.33	},
		{"cell":"9-9","value":1	}
		]	
	}
];

    $scope.cellId="";
    $scope.selectCellValue=0;
    $scope.newScore=0;
    $scope.reason="";
    $scope.showChart=false;
    $scope.updateNotes=new Array();


    $scope.passParam = function(v,id){
    	$scope.cellId=id;
		$scope.selectCellValue=v;
		$scope.reason="";
    }

    $scope.updateScore = function(v,id){
    	var setIdNum=id.slice(0,id.indexOf("-"))-1;
    	var cellNum=id.substring(id.indexOf("-")+1)-1;

    	if(setIdNum==cellNum){
    		alert("This cell is unable to change.");
    	}
    	else{
		//add a update note
		$scope.updateNotes.push("Data Set"+id+" is updated from "+ v +" to "+$scope.newScore+" by the reason: "+ $scope.reason );

		//update the cell score
		$scope.sets[setIdNum].scores[cellNum].value = $scope.newScore;	
		//update the symmetry score
		$scope.sets[cellNum].scores[setIdNum].value = $scope.newScore;

		$scope.cellId="";
		$scope.chartSets=createChartSets($scope.sets);
		$scope.setNames=chartSetName($scope.chartSets);		
		init();
		}
		$scope.newScore=0;
    };
    
    $scope.addDataSet=function(k){

		//add data set from JSON file
		var newSetId = (k + 1).toString();
		//get new set from json file. 
		if (k+1==8) {
			var newSet = Set8;
		}else if (k+1==9){
			var newSet = Set9;
		}
			
		$scope.sets = $scope.sets.concat(newSet);

		for(var i=0;i<k;i++){
			var cId=(i+1)+"-"+(k+1);
			$scope.sets[i].scores = $scope.sets[i].scores.concat([{"cell":cId,"value": newSet[0].scores[i].value}]);
		}		
		$scope.chartSets=createChartSets($scope.sets);
		console.log($scope.chartSets);
		$scope.setNames=chartSetName($scope.chartSets);
		init();
    };

    

	function createChartSets(myObj){
			var newSet=[];
			for(var i=0;i<myObj.length;i++){
				var d=[];
				for(var j=0;j<myObj[i].scores.length;j++){
					d=d.concat(myObj[i].scores[j].value);
				}
	
				var newObj={
					name: "Set" + myObj[i].setId,
					data:d
				}
				newSet=newSet.concat(newObj);
			}
			return newSet;
	}
	function chartSetName(myObj){
		var newSet=[];
		for(var i=0;i<myObj.length;i++){
			newSet=newSet.concat(myObj[i].name);

		}
		
		return newSet;
	}

    function init(){
    	$scope.$evalAsync(function(){
    		$scope.loadChart = Highcharts.chart('myChart', {
		chart: {
		        type: 'column'
		        },
		        title: {
		            text: 'Operational Risk AMA Chart'
		        },
			    xAxis: {
		         categories: $scope.setNames,
			            title: {
			                text: 'Data Sets'
			            },
			            crosshair: true
			        },
			    yAxis: {
			            min: 0,
			            title: {
			                text: 'Test Result'
			            }
			        },
				
				tooltip: {
		            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		                '<td style="padding:0"><b>{point.y:.2f} </b></td></tr>',
		            footerFormat: '</table>',
		            shared: true,
		            useHTML: true
		        },
				series: $scope.chartSets
		});
    	})
    }

    init();
    

});


