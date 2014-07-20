var Trendchattr = window.Trendchattr = Ember.Application.create({
        LOG_TRANSITIONS: true
});

Trendchattr.ApplicationAdapter = DS.FixtureAdapter.extend();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
require('scripts/custom');

Ember.LinkView.reopen({
	attributeBindings: ['data-toggle', 'data-target']
});