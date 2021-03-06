"use strict";
(function(){
var app;
try{
	app  = angular.module("stapiApp",["stapi"]);
}catch(e){
	window.alert(e);
}

app.factory('config',function(){

	return {
		  
		scope: "static",
		confs:{
				path: "RoboMl",
				securityPaths: [], //paths da aplicação onde a autenticação no sistema é necessária
				appVersion: "1.0",
				initialPath: "/resultado",
				loginPath: "/login",
				notFoundPath:"/notfound",
				pathsToHideMenu: ["/login"] //Nos paths definidos aqui o menu não será exibido
		}
	}

});

})();
