// Trendchattr.Message = DS.Model.extend({
// 	username: DS.attr('string'),
// 	message: DS.attr('string')
// });

// Trendchattr.Message.FIXTURES = [{
//     id: 1,
//     username: "dale",
//     message: "I'm so swag",
//     room: "swag"
// }, {
//     id: 2,
//     username: "dan",
//     message: "I know you are",
//     room: "swag"
// }];



// Trendchattr.Chatroom = DS.Model.extend({
//     chatroom: DS.attr('string'),
//     joined: DS.attr('string')
// });

// Trendchattr.Chatroom.FIXTURES = [{
//     id: 1,
//     chatroom: "Room Dale",
//     joined: "10"
// }, {
//     id: 2,
//     chatroom: "Room Dan",
//     joined: "50"
// }];

Trendchattr.Chatroom = DS.Model.extend({
    chatroom: DS.attr('string'),
    joined: DS.attr('string'),
    sent: DS.attr()
});

Trendchattr.Chatroom.FIXTURES = [{
    id: 1,
    chatroom: "Room Dale",
    joined: "10",
    sent: [{
        username: "dan",
        message: "dale is so cool"
    },{
        username: "dale",
        message: "yeah, I know"
    }]
}, {
    id: 2,
    chatroom: "Room Dan",
    joined: "20",
    sent: [{
        username: "dan",
        message: "dale is so cool"
    },{
        username: "dale",
        message: "yeah, I know"
    }]
}];
