var app = app || {};

(function() {
	'use strict';

	var host = tiddlyweb.status.server_host.host;
	var TodoCollection = Backbone.Collection.extend({
		model: app.todoItem,
		url: function() {
			return '/bags/tudoo_public/tiddlers?select=tag:tudoo&fat=1';
		},
		// Filter collection to completed todos
		completed: function() {
			return this.filter(function( todo ) {
				return todo.get('completed');
			});
		},
		// Filter collection to only contain the incomplete
		remaining: function() {
			return this.without.apply( this, this.completed() );
		},
		parse: function(resp, xhr) {
			var models = _.map(resp, function(tiddler){
				var attrs = {
					title: tiddler.title,
					text: tiddler.text,
					tags: tiddler.tags
				}
				if( tiddler.fields['id'] ) attrs.id = tiddler.fields['id'];
				attrs.completed = ( tiddler.fields['completed'] && tiddler.fields['completed'] == 1 ) ? true : false;
				if( tiddler.fields['date'] ) attrs.date = tiddler.fields['date'];
				
				return attrs;
			});
			return models;
		}
	});

	app.Todos = new TodoCollection();
}());