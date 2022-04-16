const logo = document.querySelector('.logo');
const upBtn = document.querySelector('.up-btn');

logo.addEventListener('click', () => {
  location.href = "index.html";

})

window.addEventListener('scroll', function() {
  if (window.scrollY >= screen.height) {
    upBtn.style.transform = 'translateY(0)';
  } else {
    upBtn.style.transform = 'translateY(200%)';
  }
});

upBtn.addEventListener("click", toTopScroll);

function toTopScroll() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

/* Burger menu */

const hamburger = document.querySelector('.burger')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')


function toggleMenu() {
  hamburger.classList.toggle('nav__link_active')
  nav.classList.toggle('nav__link_active')
  navWrapper.classList.toggle('nav__link_active')
}

hamburger.addEventListener('click', toggleMenu)
nav.addEventListener('click', closeMenu)
navLinks.forEach((el) => el.addEventListener('click', closeMenu))

function closeMenu(event) {
  if (event.target.classList.contains('nav__link')) {
    hamburger.classList.remove('nav__link_active')
    nav.classList.remove('nav__link_active')
    navWrapper.classList.remove('nav__link_active')
  }
}