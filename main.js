// Creación del módulo
var angularRoutingApp = angular.module('angularRoutingApp', ['ngRoute']);

// Configuración de las rutas
angularRoutingApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl	: 'pages/home.html',
            controller 	: 'mainController'
        })
        .when('/acerca', {
            templateUrl : 'pages/acerca.html',
            controller 	: 'aboutController'
        })
        .when('/contacto', {
            templateUrl : 'pages/contacto.html',
            controller 	: 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        });
});


angularRoutingApp.controller('mainController', function($scope) {
    $scope.rowCollection = [
        {firstName: 'Rose', lastName: 'Tyler', home: 'heart'},
        {firstName: 'Zoe', lastName: 'Heriot', home: 'Space Station W3'},
        {firstName: 'Joe', lastName: 'Grant', home: 'heart'},
        {firstName: 'Lea', lastName: '', home: ''},
        {firstName: 'Romana', lastName: '', home: 'Gallifrey'},
        {firstName: 'Clara', lastName: 'Oswald', home: 'heart'},
        {firstName: 'Adric', lastName: '', home: 'Alzarius'},
        {firstName: 'Susan', lastName: 'Foreman', home: 'Gallifrey'}

    ];
    $scope.addPerson = function(){
        $scope.rowCollection.push({ 'firstName':$scope.fname, 'lastName': $scope.lname, 'home':$scope.home });
        $scope.fname='';
        $scope.lname='';
        $scope.home='';
    };
});

angularRoutingApp.controller('aboutController', function($scope) {
    $scope.message = 'Esta es la página "Acerca de"';
});

angularRoutingApp.controller('contactController', function($scope) {
    $scope.message = 'Angel Luis Lecuona(angellecuona84@gmail.com)';
});
