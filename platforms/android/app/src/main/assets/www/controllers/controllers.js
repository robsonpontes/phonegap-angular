app.controller('HomeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('OfertaCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});

app.controller('CadastrosCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
});