require([
	'Views/app'
], function(AppView){

	var app = app || {};
	// TODO: fix this, don't want it to be a global
	ENTER_KEY = 13;

	console.log(AppView);
	// Kick things off by creating the **App**.
	window.App = new AppView();

});