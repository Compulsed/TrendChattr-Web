Trendchattr.Message = DS.Model.extend({
	username: DS.attr('string'),
	message: DS.attr('string')
});

Trendchattr.Message.FIXTURES = [{
    id: 10,
    username: "dale",
    message: "swag",
    room: "swag"
}, {
    id: 11,
    username: "dan",
    message: "I know you are",
    room: "swag"
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
    comments: ["Swag", "Lol", "XD"]
}, {
    id: 2,
    chatroom: "Room Dan",
    joined: "50",
    comments: ["This is cool", "YEAH I KNOW"]
},{
    id: 3,
    chatroom: "Room Msc",
    joined: "0",
    comments: ["Nothing", "is going on", "here"]
}];

