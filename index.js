var express = require('express');
var app = express();
var port = 9999;

app.use(express.static(__dirname + '/public'));

app.get('/scream',function(req,res){
	res.send("あ^～");
});

app.get('/now',function(req, res){
	res.send(new Date());
});

app.get('/about',function(req,res){
	res.send("What on earth are you talking about");
});

app.listen(port, function(){
	console.log('Server is listenig to 9999 part');
});