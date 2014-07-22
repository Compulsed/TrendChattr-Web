// Top level
Trendchattr.ApplicationRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('user', 1);
    },

    setupController: function(controller, model){
        // Allows you to preserve the useage of the model hook
        this._super(controller, model);


    }
});

Trendchattr.RoomsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('chatroom');
    },

    setupController: function(controller, model){
        this._super(controller, model);
    }
});

Trendchattr.RoomRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find('chatroom', params.room_id);
	},

    setupController: function(controller, model){
        this._super(controller, model);
    }
});
