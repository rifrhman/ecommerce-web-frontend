const navbarResponsive = document.getElementById("bar");
const closeNavbar = document.getElementById("close-navbar-responsive");
const navbar = document.getElementById("navbar");

if(navbarResponsive){
    navbarResponsive.addEventListener('click',() => {
        navbar.classList.add('active');
    })
}
if(closeNavbar){
    closeNavbar.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}