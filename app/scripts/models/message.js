Trendchattr.Message = DS.Model.extend({
	chatroom: DS.belongsTo('chatroom'),
	username: DS.attr('string'),
	message: DS.attr('string'),
	sent: DS.attr('date', {default: new Date()})
});

Trendchattr.User.FIXTURES = [
    {
        id: 1,
        username: "ANON"
    }
];

Trendchattr.Chatroom = DS.Model.extend({
    chatroom: DS.attr('string'),
    joined: DS.attr('string'),
    comments: DS.hasMany('message')
});

Trendchattr.Chatroom.FIXTURES = [];