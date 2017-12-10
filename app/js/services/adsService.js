//services that hold the business logic for loading ads, towns and categories

'use strict';

app.factory('adsService',
    function($resource, baseServiceUrl) {
        var adsRerource = $resource(
            baseServiceUrl + '/api/ads',
            null,
            {
                'getAll' : {method: 'GET'}
            }
        );
        return {
           getAds: function(params, success, error) {
               return adsRerource.getAll(params,success, error);
           }
        };
    }
);

app.factory('townsService',
    function ($resource, baseServiceUrl) {
        return {
            //TODO: implement a service to get towns
        };
    }
);

app.factory('categoriesService',
    function ($resource, baseServiceUrl) {
        return {
            //TODO: implement a service to get categories
        };
    }
);