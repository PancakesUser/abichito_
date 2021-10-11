window.onload = async function() {
    $('#preloader').fadeOut(function() {
        $('body').css('visibility', 'visible')
        $('body').css('overflow', 'visible');
    });
}

window.on