

var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);


player.getVideoTitle().then(function(title) {
  $('#videotitle').text(title);
});


$(document).on('click', '.ttle li', function(e){
    e.preventDefault();
    player.pause();
    $('.ttle li').removeClass('active');
    $(this).addClass('active');

    var vidTime    =  $(this).data('time'),
        editedtime =  secondConvert(vidTime);

    player.setCurrentTime(editedtime);
    player.play();
    
});

function secondConvert(input) {
    var parts = input.split(':'),
        minutes = +parts[0],
        seconds = +parts[1];
    
        return  minutes * 60 + seconds;
}


