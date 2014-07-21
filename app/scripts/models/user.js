Trendchattr.User = DS.Model.extend({
	_id: DS.attr('string'),
	online: DS.attr('boolean'),
	messages: DS.hasMany('message')
});