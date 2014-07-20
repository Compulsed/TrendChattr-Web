Trendchattr.Router.map(function () {
  this.resource('chat', { path: '/' });
  this.resource('about');
});

Trendchattr.ChatRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('message');
	},

    renderTemplate: function(){
        this.render('chat');
    }
})
