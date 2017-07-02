angular.module('appRouter',['ui.router'])
	.config(['$stateProvider','$urlRouterProvider',
		function($stateProvider,$urlRouterProvider){
			$stateProvider
			.state('/home',{

				url:"/home",
				templateUrl:"application/home/home.html",
				controller:"homeCtrl"
			})

			.state('Default',{
				url:"/Default",
				templateUrl:"application/home/default.html",
				controller:"defaultCtrl"
			})
			$urlRouterProvider.otherwise("/home");//default maps to home
		}
		])