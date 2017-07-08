$(document).ready(function(){
	$.ajax({
        url: 'https://pokeapi.co/api/v2/pokemon/',
        type: 'GET',
        dataType: 'JSON',
        data: {"limit": '811'},
    })
    .done(function(result) {
        console.log("success");
        console.log(result);
        /*recorriendo el contenido de la api*/
        for (var i = 1; i < 719; i++) {
            var poke = $("<img src=https://pokeapi.co/media/img/" + i + ".png id=" + i + ">");
            $('div.pokemon').append(poke);
        }

    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    })
	
});
