let side = document.querySelector('.toggle__btn');

side.addEventListener('click', function() {
     document.getElementById('sidebar').classList.toggle('active')
});

if($('#sidebar').hasClass('active')) {
    $('#twitch-embed').css('')
}