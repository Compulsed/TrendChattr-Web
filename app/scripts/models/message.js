Trendchattr.Message = DS.Model.extend({
	trend: DS.attr('string'),
	user: DS.attr('string'),
	message: DS.attr('string'),
	sent: DS.attr('date', {default: Date.now})
});

Trendchattr.User.FIXTURES = [{
    id: 1,
    username: "bob"
}];


Trendchattr.Chatroom = DS.Model.extend({
    chatroom: DS.attr('string'),
    joined: DS.attr('string'),
    comments: DS.attr([])
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
},{
    id: 3,
    chatroom: "Room Fun",
    joined: "0",
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
},{
    id: 4,
    chatroom: "Room Blazeit",
    joined: "0",
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
},{
    id: 5,
    chatroom: "This not a room",
    joined: "1",
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
},{
    id: 6,
    chatroom: "Room Cool Room",
    joined: "0",
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

