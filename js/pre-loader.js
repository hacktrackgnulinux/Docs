;(function ($) {
    "use strict";

    /*============= preloader js css =============*/
    var cites = [];
    cites[0] = "HackTrack is a Linux distribution made in Indonesia";
    cites[1] = "HackTrack is specially designed to perform security testing";
    cites[2] = "Hacktrack has simple and clear documentation";
    cites[3] = "HackTrack is preferred for Live USB use";
    var cite = cites[Math.floor(Math.random() * cites.length)];
    $('#preloader p').text(cite);
    $('#preloader').addClass('loading');

    $(window).on( 'load', function() {
        setTimeout(function () {
            $('#preloader').fadeOut(500, function () {
                $('#preloader').removeClass('loading');
            });
        }, 500);
    })

})(jQuery)