Trendchattr.Chatroom = DS.Model.extend({
    chatroom: DS.attr('string'),
    joined: DS.attr('string'),
    comments: DS.attr([])
});

Trendchattr.Chatroom.FIXTURES = [{
    id: 1,
    chatroom: "Room Dale",
    joined: "10",
    comments: ["Room Dale"]
}, {
    id: 2,
    chatroom: "Room Dan",
    joined: "50",
    comments: ["Room Dan"]
},{
    id: 3,
    chatroom: "Room Fun",
    joined: "0",
    comments: ["Room Msc"]
},{
    id: 4,
    chatroom: "Room Blazeit",
    joined: "0",
    comments: ["Room Msc"]
},{
    id: 5,
    chatroom: "This not a room",
    joined: "1",
    comments: ["Room Msc"]
},{
    id: 6,
    chatroom: "Room Cool Room",
    joined: "0",
    comments: ["Room Msc"]
}];

