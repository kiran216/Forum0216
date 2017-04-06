app.controller("agentListingCtrl", ['$scope',  'categoryService', 
function agentListingCtrl($scope, categoryService) {
    $Scope.CategoriesList = categoryService.GetcategoryList();

}]);
