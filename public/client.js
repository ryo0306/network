var socket = io.connect();

socket.on('init',function(messages){
	console.log(messages);
	for(var key in messages){
		render(messages[key]);
	}
});

socket.on('added',function(message){
	console.log(message);
	render(message);
});

$('#sendMessage').click(function(){
	var name = $('#name').val();
	var message = $('#message').val();
	if(!name || !message){
		return;
	}
	socket.emit('write',{name: name, message: message});
});


function render(message){
	var li = document.createElement('li');
	li.className = 'message';
	li.innerText = sanitize(message.name) + ":" + sanitaize(message.message);
	$('#messages').prepend(li);
}

function sanitize(str){
	return str.replace(/</0,'&lt');
}