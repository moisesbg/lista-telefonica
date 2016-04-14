// angular.module("listaTelefonica").factory("apiInterceptor", function ($q) {
// 	return {
// 		request: function (config) {
// 			console.log("Passou no interceptor request");
// 			return config;
// 		},
// 		responseError: function (response) {
// 			console.log("Passou no interceptor error");
// 			console.log(response.config.url);
// 			return $q.reject(response.config.url);
// 		}
// 	};
// });
// angular.module("listaTelefonica").config(function ($httpProvider) {
// 	$httpProvider.interceptors.push("apiInterceptor");
// });