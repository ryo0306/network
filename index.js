var express = require('express');
var app = express();
var port = 9999;


var bodyParser = require("body-parser");
app.use(bodyParser.json({extended: false}))

app.use(express.static(__dirname + '/public'));

var messages = [];

app.post('/messages',function(req,res){
	console.log(req.body.name);
	console.log(req.body.message);
	messages.push({name:req.body.name, message:req.body.message});
	console.log(messages);
	res.send('OK');
});

app.get('/messages',function(req,res){
	res.send(messages);
});

app.listen(port, function(){
	console.log('Server is listenig to 9999 part');
});


/*
app.get('/scream',function(req,res){
	res.send("あ^～");
});

app.get('/now',function(req, res){
	res.send(new Date());
});

app.get('/about',function(req,res){
	res.send("What on earth are you talking about");
});
*/
