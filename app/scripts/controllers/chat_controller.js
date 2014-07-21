Trendchattr.ApplicationController = Ember.ObjectController.extend({
	someValue: 10
});

Trendchattr.RoomsController = Ember.ArrayController.extend({
  totalRooms: function(){
    return this.get('model.length');
  }.property('@each')
});

Trendchattr.RoomController = Ember.ObjectController.extend({
	// Connects the Application controller to the variable application
	needs: 'application',
	application: Ember.computed.alias("controllers.application"),

	username: null,

	actions: {
		newMessage: null, // From the user input
		sendMessage: function() {
			var messageText = this.get('newMessage'); // From the html input
			if (!messageText) { return false; }
			if (!messageText.trim()) { return; }

			this.set('newMessage', '');						// Clears the text
			this.get('comments').pushObject({username: this.get('application.username'), message: messageText});	// Pushes to the model

			// Forces the text box to the bottom of the div
			var elem = document.getElementById('chat-messages');
			elem.scrollTop = elem.scrollHeight;


			return false;
		}
	}
});