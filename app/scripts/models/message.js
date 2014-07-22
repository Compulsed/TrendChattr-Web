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

Trendchattr.Message = DS.Model.extend({
	chatroom: DS.belongsTo('chatroom'),
	username: DS.attr('string'),			// Not a reference for obvious reasons, but maybe could be?
	message: DS.attr('string'),
	sent: DS.attr('date', {
		defaultValue: function() { return new Date(); }
	})
});


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
	messages: DS.hasMany('message')
});

Trendchattr.User.FIXTURES = [{
    id: 1,
    username: "bob",
    online: true,
}];



// Rooms
Trendchattr.Chatroom = DS.Model.extend({
    chatroom: DS.attr('string'),
    joined: DS.attr('number', {defaultValue: false}),
    comments: DS.attr([])
    // comments: DS.hasMany('message')
});


Trendchattr.Chatroom.FIXTURES = [{
    id: 1,
    chatroom: "Room Dale",
    joined: "10",
    comments: [{
        username: "dale",
        message: "What up"
    },{
        username: "dan",
        message: "hey man, nothing much you?"
    },{
        username: "dale",
        message: "Just chilling"
    }]
}, {
    id: 2,
    chatroom: "Room Dan",
    joined: "50",
    comments: [{
        username: "dale",
        message: "What up"
    },{
        username: "dan",
        message: "hey man, nothing much you?"
    },{
        username: "dale",
        message: "Just chilling"
    }]
}];

