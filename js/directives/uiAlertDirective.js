angular.module("listaTelefonica").directive("uiAlert",function(){
	return{

		templateUrl: "view/alert.html",
		restrict:"E",
		scope:{
			topic: "@title", /*isto está fazendo o mapeamento, a passagem de parâmetro, do atributo title definida na tag <ui-alert> do index html
			                  com a propriedade topic do escopo da diretiva uiAlertDirective, propriedade que por sua vez, é usado no alert.html.
			                  O atributo é prefixado com @. Se o atributo (no caso title) e a propriedade (no caso topic) tiverem o mesmo nome
			                  pode-se passar só o @. Ex.: title: "@" */  
			error: "=message" /*- como na tag <ui-alert o atributo message recebeu a propriedade erro do scope da página index.html, se fizer a
			                   prefixacao com @, a propriedade error da diretiva uiAlertDirective vai receber a constante string "error".
			                   Nesta situação, a prefixação deve ser feita com "=", pois assim acontece o "two way data-bind" entre a propriedade
			                   do escopo da diretiva e do template. Se o nome do atributo e da propriedade forem iguais, pode-se usar só o "=" 
			                   da mesma forma como acontece com o @. */

		},
		transclude: true /*encapsula os elementos dentro de uma diretiva, criando um escopo não isolado*/

		/* restrict "A", restringe o uso ao atributo. Ex.:
		<div ui-alert></div> com restrict A funciona porque ui-alert é um atributo da div
		<ui-alert></uialert> com restrict A NÃO funciona porque só posso usar ui-alert como atributo e não como tag.
		- restrict "E", restringe o uso ao elemento (tag). Ex.:
		<div ui-alert></div> com restrict E NÃO funciona porque ui-alert é um atributo da div
		<ui-alert></uialert> com restrict E funciona porque só posso usar ui-alert como tag.
		OBS.: dá pra fazer combinações. Ex.: restrict: "AE"

		*/
	}
})