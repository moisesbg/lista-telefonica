angular.module("listaTelefonica").filter("name", function(){
	return function (input){
		var listaDeNomes = input.split(" ");
		
		/* a função .map do array, faz a mesma coisa que o bloco de código 
		abaixo que utiliza forEach.  
			var listaDeNomesFormatada = listaDeNome.map( function (item){
				if(/(da|de|do)/.test(item)) return item;
				return item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
			})
		*/
		listaDeNomesFormatada = new Array();
		listaDeNomes.forEach( function (item, index, array){
			if(/(da|de|do)/.test(item)) 
				listaDeNomesFormatada[index] = item;
			else
				listaDeNomesFormatada[index] = item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
		});


		console.log(listaDeNomes);
		console.log(listaDeNomesFormatada);
		return listaDeNomesFormatada.join(" ");
	}
})