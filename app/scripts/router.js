Trendchattr.Router.map(function () {
  this.route('index', {path: '/'});
  this.route('about');

  this.resource('rooms', function(){
    this.resource('room', {path: '/:room_id'}, function(){
      this.route('edit');
    });
  });
});

Trendchattr.RoomsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('message');
	}
});

Trendchattr.RoomRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('message');
  }
});