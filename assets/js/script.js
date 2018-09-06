var revealButton = document.getElementById('reveal-button');
var menu = document.getElementById('nav-list');

revealButton.addEventListener('click' ,function() {
    menu.classList.toggle('nav__list--active');
});
