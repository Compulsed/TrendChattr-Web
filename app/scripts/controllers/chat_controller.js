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
			var messageText = this.get('newMessage'); 	// From the html input
			if (!messageText) { return false; }
			if (!messageText.trim()) { return; }

			this.set('newMessage', '');					// Clears the text

			var thisChatroom = this.store.find('chatroom', this.get('id'));

			var newMessage = this.store.createRecord('message', {
				username: this.get('application.username'),
				message: messageText,
				chatroom: this.store.getById('chatroom', this.get('id')),
				sent: Date.now
			});

			newMessage.save();
			// Forces the text box to the bottom of the div
			// This is normal DOM javascript
			var elem = document.getElementById('chat-messages');
			elem.scrollTop = elem.scrollHeight;

			this.socket.emit('message', {
				chatroom: this.get("id"),
				username: this.get('application.username'),
				message: messageText
			});
			return false;
		}
	},
	sockets: {
		message: function(messageData){
			console.log(messageData);
			var newMessage = this.store.createRecord('message', {
				chatroom: this.store.getById('chatroom', this.get(messageData.trend)),
				username: messageData.username,
				message: messageData.message,
				sent: messageData.sent
			});

			newMessage.save();
		},
		connect: function() {
			console.log("Just connected");
		},
		disconnect: function() {},
		error: function(errorData){
			console.log(errorData);
		}
	}
});