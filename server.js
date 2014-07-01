var http = require("http");

server = http.createServer(function(req, res){
   res.end("Hello world!");
});

server.listen(6666, function(){
   console.log("Listening on 6666");
});
