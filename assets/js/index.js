const menuBar = document.querySelector('#menu');
const headerElement = document.querySelector('header');
const navBar = document.querySelector('nav');

// Navbar Hamburger
menuBar.addEventListener('click', () => {
    if(menuBar.children[0].classList.contains('fa-bars')){
        headerElement.style.flexDirection = 'column';
        navBar.querySelector('ul').style.flexDirection = 'column'
        navBar.style.display = 'block';
        menuBar.innerHTML = '<i class="fa fa-close"></i>'
    } else {
        headerElement.style.flexDirection = 'row';
        navBar.querySelector('ul').style.flexDirection = 'row'
        navBar.style.display = 'none';
        menuBar.innerHTML = '<i class="fa fa-bars"></i>'
    }
})