Trendchattr.ChatController = Ember.ArrayController.extend({
	actions: {
		sendMessage: function() {
			var messageText = this.get('newMessage');
			if (!messageText) { return false; }
			if (!messageText.trim()) { return; }

			var newMessage = this.store.createRecord('message', {
				trend: 'All',
				user: "Anon",
				message: messageText
			});

			this.set('newMessage', '');

			newMessage.save();
			this.socket.emit('message', {
				trend: 'All',
				user: "Anon",
				message: messageText
			});
			return false;
		}
	},
	sockets: {
		message: function(messageData){
			var newMessage = this.store.createRecord('message', {
				trend: messageData.trend,
				user: messageData.user,
				message: messageData.message
			});

			newMessage.save();
		},
		connect: function() {},
		disconnect: function() {},
		error: function(errorData){
			console.log(errorData);
		}
	}
});