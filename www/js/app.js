var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   //$locationProvider.html5Mode(true);
   $routeProvider

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : 'views/home.html',
      controller     : 'HomeCtrl',
   })

   // para a rota '/oferta', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/oferta', {
      templateUrl : 'views/oferta.html'
      //controller  : 'OfertaCtrl',
   })

   // para a rota '/cadastro', carregaremos o template cadastro.html e o controller 'CadastroCtrl'
   .when('/cadastro', {
      templateUrl : 'views/cadastro.html',
      controller  : 'CadastroCtrl',
   })

   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});


/*
app.controller("testeCtrl", function ($scope) {
    $scope.msg = "I love London";
});
*/
/*
app.controller("IndexController", function ($scope,NotificationService) {
    $scope.message = "AngularJS!";
    $scope.home_active = "active";

    $scope.showAlert = function () {
            NotificationService.alert("Youed an alert.", "Alert", "Ok", function () {
                $scope.message = "You clicked it!"
            })
        };
});

app.controller("Ofertas", function($scope){
    $scope.message = "Teste";
});

app.factory("NotificationService", function () {
    return {
          alert: function (message, title, buttonText, buttonAction) {
              navigator.notification.alert(message,
                  function () {
                      $rootScope.$apply(function () {
                          buttonAction();
                      })
                  },
                  title,
                  buttonText);
          }
      }
});


(function(){
    hello();
    menu();
})();

function menu(){
    app.directive('menuPrincipal', function(){
        return{
            templateUrl: '../view/menu.html'
        }
    });
}

function hello(){
    app.directive('minhaDiretiva', function() {
        return {
            template: '<div>Bem vindo ao mundo das diretivas!</div>' 
        }
    });
}

function ofertas(){
    app.directive('ofertaDiretiva', function() {
        return {
            template: '<div>Ofertas!</div>' 
        }
    });
}*/