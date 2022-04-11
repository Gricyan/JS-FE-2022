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