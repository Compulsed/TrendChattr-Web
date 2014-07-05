Trendchattr.Message = DS.Model.extend({
	username: DS.attr('string'),
	message: DS.attr('message')
});

Trendchattr.Message.FIXTURES = [
	{
		id: 1,
		username: 'FDale',
		message: 'Hello'
	},
	{
		id: 2,
		username: 'FDaniel',
		message: 'Hi there'
	}
];