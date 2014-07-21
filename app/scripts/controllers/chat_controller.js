Trendchattr.ChatController = Ember.ArrayController.extend({
	actions: {
		sendMessage: function() {
			var messageText = this.get('newMessage');
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
	},
	sockets: {
		message: function(messageData){
			var newMessage = Ember.store.createRecord('message', {
				username: messageData.username,
				message: messageData.message
			});

			newMessage.save();
			return false;
		}
	}
});