/*
 * Individual todo view
 */
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
			this.model.on( 'archived', this.removeArchived, this );
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
			this.model.archiveIt();
		},
		removeArchived: function() {
			$(this.el).remove();
		}
	});

	return todoView;

});