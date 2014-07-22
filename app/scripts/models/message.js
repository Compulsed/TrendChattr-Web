/*
	Model naming mapping

	Model Name		 |		Model Class
	---------------------------------------------------
	photo			 |		Trendchattr.Photo
	adminUserProfile |		Trendchattr.AdminUserProfile

	Default adaptor allows attrs as string, number, boolean, date(ISO 8601)


	Upon request : Server -> serialize -> stored in record
	Upon update  : Record -> deserialize -> Server

	If attr() is not used, the serve decides the type

	Relationships
	------------------
	One-To-One
	- DS.belongsTo('profile')

	Many to Many
	- DS.hasMany('post')

 	// Used for when ember can't automatically decide on relationships
	Explict Inversers
	- Trendchattr.Post = DS.model.extend({
	-	comments: hasMany('comment' {
	-		inverse: 'redPost'
	-	})
	- })
*/



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

/*
	The User record
*/
Trendchattr.User = DS.Model.extend({
	// 	_id: DS.attr('string'),			// Was originally _id, this for mongo?
    username: DS.attr('string'),
	online: DS.attr('boolean'),
});

Trendchattr.User.FIXTURES = [{
    id: 1,
    username: "bob",
    online: true,
}];


/*
    The messages
*/
Trendchattr.Message = DS.Model.extend({
    chatroom: DS.belongsTo('chatroom'),
    username: DS.attr('string'),            // Not a reference for obvious reasons, but maybe could be?
    message: DS.attr('string'),
    sent: DS.attr('date', {
        defaultValue: function() { return new Date(); }
    })
});

Trendchattr.Message.FIXTURES = [{
    id: 1,
    chatroom: 1,
    username: "Dale",
    message: "Test message with id 1"
}, {
    id: 2,
    chatroom: 1,
    username: "Dale",
    message: "Test message with id 2"
}];


/*
    The Chatroom
*/
Trendchattr.Chatroom = DS.Model.extend({
    chatroom: DS.attr('string'),
    joined: DS.attr('number', {defaultValue: false}),
    chatMessages: DS.hasMany('message')
});


Trendchattr.Chatroom.FIXTURES = [{
    id: 1,
    chatroom: "Room Dale",
    joined: "10",
    chatMessages: []    // The Ids of the messages
}, {
    id: 2,
    chatroom: "Room Dan",
    joined: "50",
    chatMessages: []
}];


