const IconMenu = document.getElementById('icon-menu');
const MenuBarItems = document.getElementById('menu-bar-items');
const IconCloseMenu = document.getElementById('icon-close-menu');
const IntroPhoto = document.getElementById('intro-photo');


/*open bar menu*/
IconMenu.addEventListener('click',()=>{
    MenuBarItems.style.display= 'inline';
    IconCloseMenu.style.display ='inline';
    IconMenu.style.display= 'none';
});

/*close bar menu*/
IconCloseMenu.addEventListener('click',()=>{
    MenuBarItems.style.display= 'none';
    IconCloseMenu.style.display ='none';
    IconMenu.style.display= 'inline';
});
