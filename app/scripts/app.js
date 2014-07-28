var Trendchattr = window.Trendchattr = Ember.Application.create({
	LOG_TRANSITIONS: true,
	LOG_ACTIVE_GENERATION: true,
    Socket: EmberSockets.extend({
	    host: 'localhost',
	    port: 8080,
	    controllers: ['rooms']
	})
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
require('scripts/custom');

// To allow drop down menu on mobile website
Ember.LinkView.reopen({
	attributeBindings: ['data-toggle', 'data-target']
});