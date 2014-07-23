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
    username: DS.attr('string'),
    message: DS.attr('string')
});

Trendchattr.Message.FIXTURES = [{
    id: 1,
    chatroom: 1,
    username: "Annon",
    message: "SOME MESSAGE"
}];


/*
    The Chatroom
*/
Trendchattr.Chatroom = DS.Model.extend({
    id: Number,
    chatroom: DS.attr('string'),
    joined: DS.attr('number', {defaultValue: 0}),
    chatMessages: DS.hasMany('message')
});


Trendchattr.Chatroom.FIXTURES = [{
    id: 1,
    chatroom: "#iOS 8",
    joined: "10"    // The Ids of the messages
}, {
    id: 2,
    chatroom: "#AtlasMania",
    joined: "50"
}, {
    id: 3,
    chatroom: "1YearOfBSE",
    joined: "10"    // The Ids of the messages
}, {
    id: 4,
    chatroom: "#theluckyonesmusic",
    joined: "50"
}, {
    id: 5,
    chatroom: "#MazCallMe",
    joined: "10"    // The Ids of the messages
}, {
    id: 6,
    chatroom: "#WorseMoonLanding",
    joined: "50"
}, {
    id: 7,
    chatroom: "Michael Rogers",
    joined: "10"    // The Ids of the messages
}, {
    id: 8,
    chatroom: "ObamaCare",
    joined: "50"
}, {
    id: 9,
    chatroom: "Justin Bieber",
    joined: "10"    // The Ids of the messages
}, {
    id: 10,
    chatroom: "#RaiseTheWage",
    joined: "50"
}, {
    id: 11,
    chatroom: "#LGBT ",
    joined: "10"    // The Ids of the messages
}, {
    id: 12,
    chatroom: "#MyBrothersKeeper ",
    joined: "50"
}, {
    id: 13,
    chatroom: "#RebuildAmerica",
    joined: "10"    // The Ids of the messages
}, {
    id: 14,
    chatroom: "#ActOnClimate",
    joined: "50"
}, {
    id: 15,
    chatroom: "#swag",
    joined: "10"    // The Ids of the messages
}, {
    id: 17,
    chatroom: "#dansahomo",
    joined: "50"
}];


