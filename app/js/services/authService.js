// authService holds the business logic for user login, registration, logout;
// will hold the currently logged-in user, whether it is normal user or administrator
// and other sessions related functionality

'use strict';

app.factory('authService',
    function($http, baseServiceUrl) {
        return {
            login : function(userData, success, error) {
                //TODO
            },

            register : function(userData, success, error) {
                //TODO
            },

            logout : function() {
                //TODO
            },

            getCurrentUser : function() {
                //TODO
            },

            isAonymous : function () {
                //TODO
            },

            isLoggedIn : function() {
                //TODO
            },

            isNormalUser : function() {
                //TODO
            },

            isAdmin : function() {
                //TODO
            },

            getAuthHeaders : function() {
                //TODO
            }
        }
    }
); 