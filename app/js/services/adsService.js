//services that hold the business logic for loading ads, towns and categories

'use strict';

app.factory('adsService',
    function($resource, baseServiceUrl) {
        return {
            //TODO: implement a service to get ads
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