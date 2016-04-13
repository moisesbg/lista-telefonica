angular.module("listaTelefonica").directive("uiDate",function($filter){
	return {
		require: "ngModel", /* require permite acessar outra API (no exemplo ngModel), que é exposta 
		                       através da propriedade controler isto é feito através do 4º parametro da funçao (ctrl)*/
		link: function(scope,element,attrs,ctrl){
			var _formatDate = function(date){
				date = date.replace(/[^0-9]+/g,"");
				console.log(date);
				if(date.length > 2) {
					date = date.substring(0,2)+"/"+date.substring(2);
					console.log(date)
					if(date.length > 5)
						date = date.substring(0,5)+"/"+date.substring(5,9);
					console.log(date);
				}
				return date;
			}

			element.bind("keyup",function(){
				ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
				ctrl.$render();				
			});
			/* a função abaixo fará com que a data só esteja disponível no scope, quando o seu 
			   tamanho for 10, ou seja, a data foi completamente digitada */
			ctrl.$parsers.push(function(value){
				if(value.length == 10){
					var dateArray = value.split("/"); //quebrou a string em um array, onde a "/" está separando cada elemento contido na string
					/* dataArray[1] - 1 porque os meses do construtor Date(Y,M,D), vão de 0 a 11
						getTime() - retorna a hora em milisegundos */
					return new Date(dateArray[2],dateArray[1]-1,dateArray[0]).getTime(); 
				}
			});

			/* a função abaixo formata a data que está no scope, para que seja apresentada na view */
			ctrl.$formatters.push(function(value){
				return $filter("date")(value,"dd/MM/yyyy");
			})
		}
	};
});