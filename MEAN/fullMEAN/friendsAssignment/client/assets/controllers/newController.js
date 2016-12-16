app.controller('newController', ['$scope','friendsFactory', '$location', function($scope, friendsFactory, $location) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
   var index = function(){
                        friendsFactory.index(function(returnedData){
                          $scope.friends = returnedData;
                          console.log($scope.friends);
                        });
            };
   index();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
*/
  this.create = function(friend){
    friendsFactory.create(friend, function(friends){
      if(friends){
        $location.path(`/`)
      }
    })
  }

  this.delete = function(id){
    friendsFactory.delete(id, function(res){
      console.log(res)
      if(res){
        index();
        console.log($scope.friends)
      }
    })
  }
}]);
