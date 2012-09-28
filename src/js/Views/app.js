define(['Collections/todos', 'Views/todoView'],
	function(Todos, todoView) {

	'use strict';

	var AppView = Backbone.View.extend({
		el: '#todo-app',
		events: {
			'keypress #newtodo':	'createOnEnter'
		},
		initialize: function() {
			this.input = this.$('#newtodo');

			Todos.on( 'reset', this.addAll, this );
			Todos.on( 'add', this.addOne, this );

			Todos.fetch();
		},
		render: function() {
			if( Todos.length ) {
				
			} else {
				
			}
		},
		addOne: function( todo ) {
			var view = new todoView({ model: todo });
			$('#todo-list').append( view.render().el );
		},
		addAll: function() {
			Todos.each( this.addOne, this );
		},
		createOnEnter: function( e ) {
			if ( e.which !== ENTER_KEY || !this.input.val().trim() ) {
				return;
			}

			Todos.create( { title: this.input.val().trim() } );
			this.input.val('');
		}
	});
	
	return AppView;
});
