require([
	'Views/app'
], function(AppView){

	var app = app || {};
	// TODO: fix this, don't want it to be a global
	ENTER_KEY = 13;

	// register function to output right css class in template
	Handlebars.registerHelper('completed-todo', function() {
	  return this.completed === true ? 'completed' : '';
	});

	// Kick things off by creating the **App**.
	window.App = new AppView();

});