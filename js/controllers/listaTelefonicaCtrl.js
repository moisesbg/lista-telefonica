angular.module("listaTelefonica").controller("listaTelefonicaCtrl",
    function ($scope, $filter, contatosAPI, operadorasAPI, serialGenerator, $route) {
        $scope.app = "Lista Telefônica";
        $scope.contatos = [];
        /*$scope.contatos = [
         {nome: $filter('uppercase')("Pedro"), data: new Date('1978-03-12'), telefone: "99998888",cor:"blue"},
         {nome: "Ana", data: new Date('1984-05-15'), telefone: "99998877",cor:"yellow"},
         {nome: "Maira", data: new Date('1990-12-31'), telefone: "99998866", cor:"red"}];*/
        $scope.operadoras = [];

        var carregarContatos = function () {
            contatosAPI.getContatos()
                .success(function (data, status) {
                    data.forEach(function (item) {
                        item.serial = serialGenerator.generate();
                    });
                    $scope.contatos = data;
                })
                .error(function (data, status) {
                    $scope.error = "Não foi possível carregar os contatos."

                });
        };

        var carregarOperadoras = function () {
            operadorasAPI.getOperadoras().success(
                function (data, status) {
                    $scope.operadoras = data;
                });
        };

        $scope.adicionarContato = function (contato) {
            contato.serial = serialGenerator.generate();
            contato.data = new Date();
            contatosAPI.saveContato(contato).success(
                function (data, status) {
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                    carregarContatos();
                    <!-- fazer via push, passando o data para o array de contatos. Eh mais performático -->
                })
                .error(function (data, status) {
                    $scope.message = "Aconteceu um problema: " + data;
                });
        };
        $scope.apagarContatos = function (contatos) {
            $scope.contatos = contatos.filter(function (contato) {
                if (!contato.selecionado)
                    return contato;

            });
        };
        $scope.isContatoSelecionado = function (contatos) {
            return contatos.some(function (contato) {
                return contato.selecionado;

            });
        }
        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
        };

        carregarContatos();
        carregarOperadoras();
    });