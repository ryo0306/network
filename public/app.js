document.getElementById('startButton').addEventListener('click',function(){
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
},1);