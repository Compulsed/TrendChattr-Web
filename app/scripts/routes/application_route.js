// Top level
Trendchattr.ApplicationRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('username', 1);
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