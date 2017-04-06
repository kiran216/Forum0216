app.service('categoryService', categoryService);
categoryService.$inject = ['$http', '$q', 'helperService'];

function categoryService($http, $q, helperService) {
    return {
        insertOrUpdateCategory: function (url, currentCategoryDetails) {
            var defer = $q.defer();
            $http({
                url: url,
                method: "POST",
                data: {
                    CategoryViewModel: currentCategoryDetails
                }
            }).success(function (results) {
                defer.resolve(results);
            });
            return defer.promise;
        },
        deleteCategory: function (url, CategoryGuid) {
            var defer = $q.defer();
            $http({
                url: url,
                method: "POST",
                data: {
                    CategoryGuid: CategoryGuid
                }
            }).success(function (results) {
                defer.resolve(results);
            });
            return defer.promise;
        }
    }

}