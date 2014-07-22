// Top level
Trendchattr.ApplicationRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('user', 1);
    }
});

Trendchattr.RoomsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('chatroom');
    }
});

Trendchattr.RoomRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('chatroom', params.room_id);
	}
});


// Trendchattr.MessageRoute = Ember.Route.extend({
//     model: function(){
//         this.store.push('message', {
//             id: 10,
//             chatroom: 1,
//             username: "Dale",
//             message: "This is from within the MessageRoute model"
//         });

//         this.store.push('message', {
//             id: 11,
//             chatroom: 1,
//             username: "Dale",
//             message: "This is from within the MessageRoute model msg 2"
//         });
//     }
// });