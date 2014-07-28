Trendchattr.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://api.trendchattr.com' 	// was: http://localhost:8080
										// was: namespace: 'api/dev'
});

Trendchattr.ApplicationSerializer = DS.RESTSerializer.extend({
	normalizeHash: {
		chatrooms: function(hash) {
			hash.id = hash.chatroom;
			return hash;
		}
	}
});