/*
 * The todo item model
 */
define(['Models/UserStatus'], function(status) {

	'use strict';

	var todoItem = Backbone.Model.extend({
		idAttribute: "title", // without an id model is considered to be new
		defaults: {
			id: Math.floor((Math.random()*10000)+1),
			title: "todo item",
			text: "random text",
			completed: false,
			date: "24/07/1985",
			tags: ['tudoo']
			//geo
		},
		url: function() {
			return "/bags/" + status.attributes.space.recipe + "/tiddlers/" + this.get('title');
		},
		toggle: function() {
			this.save({
				completed: !this.get('completed')
			}, {wait: true});
		},
		toJSON: function() {
			return {
				title: this.get('title'),
				text: this.get("text"),
				fields: {
					completed: this.get("completed"),
					date: this.get("date")
				},
				tags: this.get("tags")
			};
		},
		archiveIt: function() {
			// add 'archive' tag to model
			// once saved on server, trigger archived event
			this.save({
				tags: $.merge(this.get('tags'), ['archive'])
			}, { wait: true,
				 success: function(model, resp) {
					model.trigger('archived');
				}
			});
		}
	});

	return todoItem;

});
