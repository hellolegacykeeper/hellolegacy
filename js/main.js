
var firstvid    =  $('.first'),
    vID         =  firstvid.data('videoid'),
    vtime       =  firstvid.data('time'),
    options = {
        id: vID
    };

    firstvid.addClass('active');

var player = new Vimeo.Player('vimeoVideo', options);
    player.setCurrentTime(secondConvert(vtime));
    player.disableTextTrack();


    // player.getVideoTitle().then(function(title) {
    //     $('#videotitle').text(title);
    // });

    player.play();


$(document).on('click', '.ttle li', function(e){
    e.preventDefault();

    $('.ttle li').removeClass('active');
    $(this).addClass('active');

    var vidID       =  $(this).data('videoid'),
        vidTime     =  $(this).data('time'),
        editedtime  =  secondConvert(vidTime);


    player.loadVideo({id: vidID}).then(()=> player.setCurrentTime(editedtime)).then(()=> player.play());
    
    
});

function secondConvert(input) {
    var parts = input.split(':'),
        minutes = +parts[0],
        seconds = +parts[1];
    
        return  minutes * 60 + seconds;
}


