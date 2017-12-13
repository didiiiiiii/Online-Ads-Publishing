'use strict';

//The HomeController holds the presentation logic for the home screen
app.controller('HomeController',
    function ($scope, adsService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.reloadAds = function () {
            adsService.getAds(
                $scope.adsParams,
                function success(data) {
                    console.log($scope.adsParams.pageSize);
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };
      
        // this event is sent by RideSidebarController when the current categody is changed
        $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
            $scope.adsParams.categoryId = selectedCategoryId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();            
        });

        // this event is sent by the RideSidebarController when the current town is changed
        $scope.$on("townSelectionChanged", function(event, selectedTownId) {
            $scope.adsParams.townId = townId;
            $scope.adsParams.startPage = 1;
            $scope.reloadAds();
        });
    }
);