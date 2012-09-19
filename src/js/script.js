require([
	'Views/app'
], function(AppView){

	var app = app || {};
	var ENTER_KEY = 13;

	console.log(AppView);
	// Kick things off by creating the **App**.
	window.App = new AppView();

});