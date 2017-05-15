myApp.factory("ContentService", function ($http) {
    return {
        getBuild: function (callback) {
            $http({
                url: adminurl + 'Build/getAll',
                method: 'POST',
                withCredentials: false
            }).then(callback);
        }
    }
})