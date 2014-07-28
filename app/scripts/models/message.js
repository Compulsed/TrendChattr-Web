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

Trendchattr.Message.FIXTURES = [];

/*
    The Chatroom
*/
Trendchattr.Chatroom = DS.Model.extend({
    source: DS.attr('string'),
    chatroom: DS.attr('string'),
    joined: DS.attr('number', {defaultValue: 0}),
    chatMessages: DS.hasMany('message')
});
