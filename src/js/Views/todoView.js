var app = app || {};

$(function() {
	'use strict';

	app.todoView = Backbone.View.extend({
		tagName: "li",
		template: _.template( $('#todo-template').html() ),
		events: {
			'click .todo': 'toggleComplete',
			'click .btn-delete': 'remove'
		},
		initialize: function() {
			this.model.on( 'change', this.render, this );
		},
		render: function() {
			this.$el.html( this.template( this.model.attributes ) );

			return this;
		},
		toggleComplete: function() {
			this.model.toggle();
		},
		remove: function(e) {
			console.log(e);
			e.preventDefault();
			e.stopPropagation();
			this.model.destroy();
		}
	});

});