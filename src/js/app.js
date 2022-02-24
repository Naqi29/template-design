// Hamburger Menu
const hbgrMenu = document.querySelector('.toggler-icon');

hbgrMenu.onclick = function() {
    hbgrMenu.classList.toggle('close-icon-active');
}

// Icon "Favorite" in card of product
const iconFav = document.querySelectorAll('.fa-heart');

for (let x = 0; x < iconFav.length; x++) {
iconFav[x].onclick = function () {
    iconFav[x].classList.toggle('favorite');
};
}