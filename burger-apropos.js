function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');

    const menuIcon = document.querySelector('.menu-icon1');
    menuIcon.classList.toggle('active');
    
    menuIcon.classList.toggle('closed', !menu.classList.contains('active'));
   
}