/*
 * Main App View
 */
define(['Collections/todos', 'Views/todoView'],
	function(Todos, todoView) {

	'use strict';

	var AppView = Backbone.View.extend({
		el: '#todo-app',
		events: {
			'keypress #newtodo'	: 'createOnEnter',
			'blur #newtodo'		: 'resetInput',
			'click .toggle button'	: 'toggleCompleted'
		},
		initialize: function() {
			this.input = this.$('#newtodo');
			this.tudooList = this.$el.find("#todo-list");

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

			var todoText = this.input.val().trim(),
				textParts = todoText.split("#"),
				tags = ['tudoo'];

			if(textParts.length > 1 ) {
				var i = 1,
					len = textParts.length;
				for( ; i < len; i++) {
					tags.push(textParts[i].trim());
				}
			}
			Todos.create( { title: textParts[0].trim(), tags: tags  } );
			this.input.attr("placeholder", "what else...").val('');
		},
		resetInput: function() {
			this.input.attr('placeholder', "What needs to be done?");
		},
		toggleCompleted: function(e) {
			this.tudooList.toggleClass('hide-completed');
		}
	});
	
	return AppView;
});
