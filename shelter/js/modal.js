// POPUP

const modalWindow = document.querySelector('.modal')
const modalContainerContent = document.querySelector('.modal__container-content')

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
    createModalCardTemplate(clickedCardId)
    modalWindow.classList.add('modal-active')
    body.classList.add('modal-no-scroll')
  }
})


// CREATE MODAL-CARD TEMPLATE
const createModalCardTemplate = (id) => {
  modalContainerContent.innerHTML = `
      <div class="modal__img"><img src="${pets[id].img}" alt="${pets[id].name}"></div>
      <div class="modal__content">
        <h3 class="modal__pet-name">${pets[id].name}</h3>
        <h4 class="modal__pet-type">${pets[id].type} - ${pets[id].breed}</h4>
        <h5 class="modal__pet-description">${pets[id].description}</h5>
        <ul class="modal__pet-info">
          <li><h5><span class="bold-text">Age:</span> ${pets[id].age}</h5></li>
          <li><h5><span class="bold-text">Inoculations:</span> ${pets[id].inoculations}</h5></li>
          <li><h5><span class="bold-text">Diseases:</span> ${pets[id].diseases}</h5></li>
          <li><h5><span class="bold-text">Parasites:</span> ${pets[id].parasites}</h5></li></ul>
      </div>`
}

const closeModalWindow = () => {
  modalWindow.classList.remove('modal-active')
  body.classList.remove('modal-no-scroll')
}

// Close modal Window with btn
const BTN_CLOSE_MODAL = document.querySelector('.btn-close')
BTN_CLOSE_MODAL.addEventListener('click', () => {
  closeModalWindow()
})

// Close modal Window with overlay
const modalWrapper = document.querySelector('.modal__wrapper')
modalWrapper.addEventListener('click', () => {
  closeModalWindow()
})

modalContainerContent.addEventListener('click', (event) => {
  event.stopPropagation();
})