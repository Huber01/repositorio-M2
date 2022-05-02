
    
$('#boton').click( () => {
  
   //lo primero que hará será borrar el contenido de la lista para no duplicar 
    //los datos cuando toque el botón más de una vez.
    var list = $('#lista');
    list.empty();
  // GET AJAX
  $.get('http://localhost:5000/amigos', function (data) {
    // vanilla javascript
    for(i =0; i<data.length; i++){
    /* var li = document.createElement('li'); 
    li.textContent = data[i].name+ ' X';
    $('#lista').append(li); */
    list.append(`<li>${data[i].name}</li>`)
    }
  });

});

$('#search').click(function () {
    // GET AJAX
    var input = $('#input').val();
    $('#amigo').empty();
    $('#input').val('');
    
    $.get(`http://localhost:5000/amigos/${input}`, function (data) {
      // vanilla javascript
        $('#amigo').text(data.name);//porque no acepta textContent
             
    });
  
  });
 
  $('#delete').click(function () {
  var delInput = $('#inputDelete').val();
  $.ajax({
    url: `http://localhost:5000/amigos/${delInput}`,
    type: 'DELETE',
    success: function() {
        
        // vanilla javascript
        
        $('#sucess').text('Tu amigo fue removido de la lista');
  
      }
})
});