angular.module("listaTelefonica", ["ngMessages", "serialGenerator","ui", "ngRoute"]); 
//indicando quais os módulos importados pelo módulo listaTelefonica. No caso, o módulo ngMessages (próprio do Angular) e o módulo serialGenerator
//criado no arquivo js/lib/serialGerenator.js
//Modulo ngRoute, define as rotas das páginas (pode-se utilizá-lo para implementar o Single Page Application)
angular.module("listaTelefonica").run(['$rootScope', '$location', function ($rootScope, $location ) {
    $rootScope.$on("$routeChangeError", function (event, current, previous, error) {
        $rootScope.paginaComErro = current.loadedTemplateUrl;
        $rootScope.metodoHTTP = error.config.method;
        $rootScope.urlComErro = error.config.url;
        console.log($rootScope.paginaComErro);
        console.log($rootScope.metodoHTTP);
        console.log($rootScope.urlComErro);
        $location.path('/error');
    });
}]);