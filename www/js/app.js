// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngMaterial'])

.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .constant('ApiEndpoint', {
        url: 'http://10.129.86.103:5000/'
    })
    .config(function($stateProvider, $urlRouterProvider) {
        openFB.init({
            appId: '991091004236788'
        });
        $stateProvider

            .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
        })

        .state('app.search', {
            url: "/search",
            views: {
                'menuContent': {
                    templateUrl: "templates/search.html"
                }
            }
        })

        .state('app.browse', {
                url: "/browse",
                views: {
                    'menuContent': {
                        templateUrl: "templates/browse.html"
                    }
                }
            })
            .state('app.sessions', {
                url: "/sessions",
                views: {
                    'menuContent': {
                        templateUrl: "templates/sessions.html",
                        controller: 'SessionsCtrl'
                    }
                }
            })

        .state('app.session', {
            url: "/sessions/:sessionId",
            views: {
                'menuContent': {
                    templateUrl: "templates/session.html",
                    controller: 'SessionCtrl'
                }
            }
        })

        .state('app.profile', {
            url: "/profile",
            views: {
                'menuContent': {
                    templateUrl: "templates/profile.html",
                    controller: "ProfileCtrl"
                }
            }
        })

        .state('app.checkbox', {
            url: "/checkbox",
            views: {
                'menuContent': {
                    templateUrl: "templates/checkbox.html",
                    controller: 'CheckBoxCtrl'
                }
            }
        })

        .state('app.mbutton', {
            url: "/mbutton",
            views: {
                'menuContent': {
                    templateUrl: "templates/mButton.html"
                }
            }
        });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/sessions');
    });
