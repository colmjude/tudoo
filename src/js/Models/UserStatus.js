/*
 * TS user status model
 */
define([], function () {

	var StatusModel = Backbone.Model.extend({
		url: '/status'
	});

	var status = new StatusModel();
	status.fetch({ async: false });

	return status;
});
