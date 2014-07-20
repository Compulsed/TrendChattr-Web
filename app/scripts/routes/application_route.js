// Top level
Trendchattr.ApplicationRoute = Ember.Route.extend({
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});

Trendchattr.RoomsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('chatroom');
    }
});

Trendchattr.RoomRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('message');
  }
});