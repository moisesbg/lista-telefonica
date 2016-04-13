angular.module("listaTelefonica").controller("novoContatoCtrl", 
                                              function ($scope, contatosAPI, serialGenerator, $location, operadoras){
    /* "operadoras" que eh injetado neste controler, provém da variável operadores, declarada no "resolve" 
        do roteamento da página novoContato (configValue.js)*/
    $scope.operadoras = operadoras.data;
    $scope.adicionarContato = function(contato) {
        contato.serial = serialGenerator.generate();
        contatosAPI.saveContato(contato).success(
                function(data,status){
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                    $location.path("/contatos");
            })
        .error(function(data,status) {
            $scope.message = "Aconteceu um problema: "+data;
        });
    };
 
});