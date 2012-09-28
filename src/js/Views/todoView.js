define([], function() {
	'use strict';

	var todoView = Backbone.View.extend({
		tagName: "li",
		template: Handlebars.compile( $('#todo-template-hb').html() ),
		events: {
			'click .todo': 'toggleComplete',
			'click .btn-delete': 'remove'
		},
		initialize: function() {
			this.model.on( 'change', this.render, this );
			this.model.on( 'destroy', this.removeDestroyed, this );
		},
		render: function() {
			this.$el.html( this.template( this.model.attributes ) );

			return this;
		},
		toggleComplete: function() {
			this.model.toggle();
		},
		remove: function(e) {
			e.preventDefault();
			e.stopPropagation();
			this.model.destroy({wait: true}); // wait until server responds to remove todo
		},
		removeDestroyed: function() {
			$(this.el).remove();
		}
	});

	return todoView;

});