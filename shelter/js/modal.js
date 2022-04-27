// POPUP

const modalWindow = document.querySelector('.modal')

// Disable pet's card link default setting
let disabledLinks = document.querySelectorAll('.button_disabled')
disabledLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  })
})

// Get an id of clicked card
CAROUSEL.addEventListener('click', (event) => {
  event.stopPropagation();

  if (event.target.closest('.slider__card')) {
    let clickedCardId = event.target.closest('.slider__card').getAttribute('data-id')
    console.log(clickedCardId)
    modalWindow.classList.add('modal-active')
    body.classList.add('modal-no-scroll')
  }
})



// Close modal Window with btn
const BTN_CLOSE_MODAL = document.querySelector('.btn-close')
BTN_CLOSE_MODAL.addEventListener('click', () => {
  modalWindow.classList.remove('modal-active')
  body.classList.remove('modal-no-scroll')
})

// Close modal Window with overlay
const modalWrapper = document.querySelector('.modal__wrapper')
modalWrapper.addEventListener('click', () => {
  modalWindow.classList.remove('modal-active')
  body.classList.remove('modal-no-scroll')
})