Trendchattr.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});

Trendchattr.RoomsRoute = Ember.Route.extend({

});

Trendchattr.RoomRoute = Ember.Route.extend({

});