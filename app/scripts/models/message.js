Trendchattr.Message = DS.Model.extend({
	trend: DS.attr('string'),
	user: DS.attr('string'),
	message: DS.attr('string'),
	sent: DS.attr('date', {default: Date.now})
});

Trendchattr.Message.FIXTURES = [
	{
		id: 1,
		trend: '#live',
		user: 'Dan',
		message: 'Hi there'
	}
];