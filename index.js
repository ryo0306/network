var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 8888;

var bodyParser = require('body-parser');
app.use(bodyParser.json({extended: false}));

app.use(express.static(__dirname + '/public'));

var messages = [];

io.on('connection',function(socket){

	console.log(socket.id + 'is conected');

	socket.emit('init',messages);
	socket.on('write',function(message){
		messages.push(message);
		socket.emit('added',messages);
		sockett.broadcast.emit('added',message);
	});
});

app.post('/messages', function(req, res){
  console.log(req.body.name);  
  console.log(req.body.message);  
  messages.push({name: req.body.name, message: req.body.message})
  console.log(messages);
  res.send('OK');
});

app.get('/messages', function(req, res){
  res.send(messages);
});

server.listen(port, function(){
  console.log('Server is listening to ' + port + ' port');
});
