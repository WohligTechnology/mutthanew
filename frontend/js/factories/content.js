myApp.factory("ContentService", function ($http) {
    return {
        getBuild: function (callback) {
            $http({
                url: adminurl + 'Build/getAll',
                method: 'POST',
                withCredentials: false
            }).then(callback);
        },

        getKnow: function (callback) {
            $http({
                url: adminurl + 'Know/getAll',
                method: 'POST',
                withCredentials: false
            }).then(callback);
        },

        getEnabledClients: function (callback) {
            $http({
                url: adminurl + 'Clients/getAllEnabled',
                method: 'POST',
                withCredentials: false
            }).then(callback);
        }
    }
})