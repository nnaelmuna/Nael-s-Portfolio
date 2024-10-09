// Toggle Navbar
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
// Remove toogle icon
menuIcon.classList.remove('bx-x')
navbar.classList.remove("active")
}

// typed js
const typed = new Typed('.multiple-text', {
    strings : ['Aspiring Sofware Engineer', 'UI UX Designer', 'Product Manager'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 100, 
    loop: true
});

//certificate slider
// Inisialisasi Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
  

