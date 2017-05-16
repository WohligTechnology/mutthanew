myApp.factory("ContentService", function ($http) {
    return {
        getHomeSliders: function (callback) {
            $http({
                url: adminurl + 'HomeSlider/getAllEnabled',
                method: 'POST',
                withCredentials: false
            }).then(callback);
        },

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
        },

        ContactSave: function (formdata, callback) {
            $http({
                url: adminurl + 'ContactUs/saveContact',
                method: 'POST',
                withCredentials: false,
                data: formdata
            }).then(callback);
        },

        getDetails: function (callback) {
            $http({
                url: adminurl + 'OfficeDetails/getDetails',
                method: 'POST',
                withCredentials: false
            }).then(callback);
        },

        getProjectWithId: function (projectId, callback) {
            $http({
                url: adminurl + 'Project/getOne',
                method: 'POST',
                data: projectId,
                withCredentials: false
            }).then(callback);
        },

        getEnabledBannerByPage: function (page, callback) {
            $http({
                url: adminurl + 'Banner/getEnabledBannerByPage',
                method: 'POST',
                data: page,
                withCredentials: false
            }).then(callback);
        }
    }
})