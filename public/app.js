$('#sendMessage').click(sendMessage);

function sendMessage(){
  var name = $('#name').val();
  var message = $('#message').val();
  if (!name || !message) {
    return;
  }
  $.ajax({
    url: '/messages',
    method: 'POST',
    data: JSON.stringify({name: name, message: message}),
    contentType: 'application/json',
    success: function(response){
      console.log(name + ":" + message);
    }
  });
}

setInterval(readMessage, 1000);

function readMessage(){
  $.ajax({
    url: '/messages',
    method: 'GET',
    success: function(response) {
      $('#messages').empty();
      for (var i = 0, l = response.length; i < l; i++){
        var message = document.createElement('li');
        message.className = 'message';
        message.innerText = response[i].name + ":" + response[i].message;
        $('#messages').prepend(message);
      }
    }
  });
}

