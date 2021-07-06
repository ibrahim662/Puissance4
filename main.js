$('#jeu').ready(function() {
    const p4 = new P4("#jeu");

    $('#restart').on('click', function(){
        $("#jeu").empty();
        p4.drawGame();
        $('#restart').css('visibility', 'hidden');
    })
    });