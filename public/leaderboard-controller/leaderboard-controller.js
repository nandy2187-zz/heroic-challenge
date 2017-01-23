(function () {
  'use strict'
  angular
    .module("leaderboard")
    .controller("leaderboardCtrl", function($scope, resultsDataFactory, $timeout, $interval){

      $scope.currentPage = 0;
      $scope.waitTime = 6000;
      $scope.elementsInGrid = 15;


      resultsDataFactory.getListResults().then(function(response){

        $scope.listResults = response;
        $scope.gridPages = splitResults($scope.listResults.results, $scope.elementsInGrid);

        $timeout(function(){
          pagination();
        });
      });



      $scope.checkURL = function(str) {
        return str.replace(/\\/,'');
      }

      function pagination() {
        var arrDOM = document.getElementsByClassName('grid-result');
          var listClass = arrDOM[$scope.currentPage].className;
          arrDOM[$scope.currentPage].className = listClass.replace('not-visible', 'visible');
          $interval(function(){
            listClass = arrDOM[$scope.currentPage].className;
            if(listClass.indexOf('ng-hide')>0) {
              arrDOM[$scope.currentPage].className = listClass.replace('not-visible', 'visible');
            } else {
              arrDOM[$scope.currentPage].className = listClass.replace('visible', 'not-visible');
              if($scope.currentPage+1 <= (arrDOM.length-1)){
                $scope.currentPage++;
                arrDOM[$scope.currentPage].className = listClass.replace('not-visible', 'visible');
              } else {
                $scope.currentPage = 0;
                arrDOM[$scope.currentPage].className = listClass.replace('not-visible', 'visible');
              }
            }
          }, $scope.waitTime);
      };

      function splitResults(list, slices) {
        if (list.length > 0) {
    			var arrayToReturn = [];
    			var subArray=[];
    			var pushed=true;
    			for (var i=0; i<list.length; i++){
  					if((i+1)%slices==0){
  						subArray.push(list[i]);
  						arrayToReturn.push(subArray);
  						subArray=[];
  						pushed=true;
  					}
  					else{
  						subArray.push(list[i]);
  						pushed=false;
  					}
          }
  			if (!pushed) {
          arrayToReturn.push(subArray);
        }
  			return arrayToReturn;
      }
      }




    });
})();
