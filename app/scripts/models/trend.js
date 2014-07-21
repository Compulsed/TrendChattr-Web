Trendchattr.Trend = DS.Model.extend({
	_id: DS.attr('string'),
	source: DS.attr('string'),
	messages: DS.hasMany('message')
});

Trendchattr.Trend.FIXTURES = [
	{
		_id: 'All',
		source: 'twitter'
	}
]
