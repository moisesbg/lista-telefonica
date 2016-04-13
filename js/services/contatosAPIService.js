angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
	var _getContatos = function(){
        console.log("entrou getContatos");
		return $http.get(config.baseUrl +"contatos")
		.success(function(data){
			console.log("sucesso getContatos");
		})
		.error(function(data,status,headers,config,statusText){
			console.log("erro getContatos");
			console.log(data);
		})
		
	};

	var _getContato = function(id){
		console.log("aqui 30");
		return $http.get(config.baseUrl +"contatos/"+id);
	};

	var _saveContato = function(contato){
		return $http.post(config.baseUrl +"contatos",contato);
	};

	return {
		getContatos : _getContatos,
		getContato: _getContato,
		saveContato: _saveContato
	};
});
