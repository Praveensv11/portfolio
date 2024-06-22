let icon_container = document.querySelector('.nav-mob-right')
let icon = document.querySelector('.mob-icon')

let burgur = document.querySelector('.mob-nav-content')

icon_container.onclick = function(){
    if (icon.getAttribute('src') === 'images/icons/1564512_burger_catalogue_list_menu_icon.png') {
        icon.setAttribute('src', 'images/icons/cancel.png');
        burgur.style.display = 'block'
    } else {
        icon.setAttribute('src', 'images/icons/1564512_burger_catalogue_list_menu_icon.png');
        burgur.style.display = 'none'
    }
}

