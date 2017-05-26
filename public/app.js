$('#sendmessage').click(sendMessage);

function sendMessage(){
	var name = $('#name').val();
	var message = $('#message').val();
	console.log(name +':'+ message);
	if(!name || !message){
		return;
	}
	$.ajax({
		url: '/messages',
		method: 'POST',
		data: JSON.stringify({name: name, message: message}),
		contentType: 'application/json',
		success: function(response){
			console.log(name + ':' + message);
		}
	});
}

setInterval(readMessage,1000);

function readMessage(){
	$.ajax({
		url: '/messages',
		method: 'GET',
		success: function(response){
			console.log(response);
		}
,	})
}


/*document.getElementById('startButton').addEventListener('click',function(){
	$.ajax({
		method: 'GET',
		url: '/scream',
		success: function(response){
			$('#highlight').text(response);
		}
	});
});

setInterval(function(){
	$.ajax({
		method: 'GET',
		url: '/now',
		success: function(response){
		$('#highlight').text(response);	
		}
	})
},1);*/