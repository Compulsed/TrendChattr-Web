Trendchattr.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://api.trendchattr.com', // was: http://localhost:8080
	namespace: 'api/dev'
});

Trendchattr.ApplicationSerializer = DS.RESTSerializer.extend({
	normalizeHash: {
		chatrooms: function(hash) {
			hash.id = hash._id;
			delete hash._id;
			return hash;
		}
	}
});