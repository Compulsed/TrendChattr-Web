Trendchattr.Router.map(function () {
	this.route('index', {path: '/'});
	this.route('about');

	this.resource('rooms', function(){
		this.resource('room', {path: '/:room_id'}, function(){
			this.resource('message', {path: '/:message_id'}, function(){

			});
		});
	});
});