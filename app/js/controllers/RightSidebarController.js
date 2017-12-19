app.controller('RightSidebarController',
    function ($scope, $rootScope, categoriesService, townsService) {
        //$scope.categories = categoriesService.getCategories();
        //$scope.towns = townsService.getTowns();

        $scope.categoryClicked = function(clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
        };

        $scope.townClicked = function(clickedTownId) {
            console.log(clickedTownId);
            $scope.selectedTownId = clickedTownId;
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
        };

       $scope.reloadTowns = function () {
            //console.log('Didi-towns');           
            townsService.getTowns(
                function success(data) {
                    //console.log('reloadTowns');                    
                    $scope.towns = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load towns", err);
                }
            );
        };

         $scope.reloadCategories = function () {
            //console.log('Didi-categories');
            categoriesService.getCategories(
                function success(data) {
                    //console.log('reloadCategories');
                    $scope.categories = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load categories", err);
                }
            );
        };


        $scope.reloadCategories();
        $scope.reloadTowns();
    }
);