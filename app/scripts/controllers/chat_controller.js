Trendchattr.RoomsController = Ember.ArrayController.extend({
  totalRooms: function(){
    return this.get('model.length');
  }.property('@each')
});

Trendchattr.RoomController = Ember.ArrayController.extend({
	actions: {
		sendMessage: function() {
			var messageText = this.get('newMessage'); // From the html input
			if (!messageText) { return false; }
			if (!messageText.trim()) { return; }

			var newMessage = this.store.createRecord('message', {
				username: "Anon",
				message: messageText
			});

			this.set('newMessage', '');

			newMessage.save();
			return false;
		}
	}
});