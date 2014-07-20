Trendchattr.RoomsController = Ember.ArrayController.extend({
  totalRooms: function(){
    return this.get('model.length');
  }.property('@each')
});

Trendchattr.RoomController = Ember.ObjectController.extend({
	actions: {
		newMessage: null, // From the user input
		sendMessage: function() {
			var messageText = this.get('newMessage'); // From the html input
			if (!messageText) { return false; }
			if (!messageText.trim()) { return; }

			this.set('newMessage', '');						// Clears the text
			this.get('comments').pushObject(messageText);	// Pushes to the model

			  var elem = document.getElementById('chat-messages');
			  elem.scrollTop = elem.scrollHeight;


			return false;
		}
	}
});