var app = app || {};

$(function( $ ) {
	'use strict';

	app.AppView = Backbone.View.extend({
		el: '#todo-app',
		events: {
			'keypress #newtodo':	'createOnEnter'
		},
		initialize: function() {
			this.input = this.$('#newtodo');

			window.app.Todos.on( 'reset', this.addAll, this );
			window.app.Todos.on( 'add', this.addOne, this );

			app.Todos.fetch();
		},
		render: function() {
			if( app.Todos.length ) {
				
			} else {
				
			}
		},
		addOne: function( todo ) {
			var view = new app.todoView({ model: todo });
			$('#todo-list').append( view.render().el );
		},
		addAll: function() {
			app.Todos.each( this.addOne, this );
		},
		createOnEnter: function( e ) {
			if ( e.which !== ENTER_KEY || !this.input.val().trim() ) {
				return;
			}

			app.Todos.create( { title: this.input.val().trim() } );
			this.input.val('');
		}
	});
});