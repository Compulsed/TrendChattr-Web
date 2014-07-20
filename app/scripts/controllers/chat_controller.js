Trendchattr.RoomsController = Ember.ArrayController.extend({


  	// sortProperties: ['name'],
  	// sortAscending: true, // false = descending

  	// Remove this
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