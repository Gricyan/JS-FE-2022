const CAROUSEL = document.querySelector('.carousel-container');
const BTN_LEFT = document.querySelector('.slider__arrow_left')
const BTN_RIGHT = document.querySelector('.slider__arrow_right')
const BTN_LEFT_THREE = document.querySelector('.slider__arrow_left-three')
const BTN_RIGHT_THREE = document.querySelector('.slider__arrow_right-three')

let idx = 0

// PETS GALLERY

const createCardTemplate = (dir) => {
  let direction = dir

  // CREATE CARD TEMPLATE
  const divSliderCard = document.createElement("div");
  divSliderCard.classList.add("slider__card");
  divSliderCard.setAttribute('data-id', pets[idx].id);
  divSliderCard.innerHTML = `
  <img src="${pets[idx].img}" alt="${pets[idx].name}">
  <div class="slider__title">${pets[idx].name}</div>
  <a href="#" class="button slider__button button_disabled">Learn more</a>`

  // INSERT NEW CARD TO CAROUSEL
  if (direction == 'left') {
    CAROUSEL.append(divSliderCard)
  } else {
    CAROUSEL.prepend(divSliderCard)
  }

  // ITERATE NEW CARD
  if (idx + 1 == pets.length) {
    idx = 0;
  } else if (idx < 0) {
    idx++;
  } else {
    idx++;
  }
}

function left(move) {
  let currentSlides = document.querySelectorAll('.slider__card');
  BTN_RIGHT.removeEventListener('click', left)
  BTN_LEFT.removeEventListener('click', right)

  if (move === 'move-three-items') {
    for (let i = 0; i < 3; i++) {
      CAROUSEL.classList.add('three-transition-left') 
      createCardTemplate('left');
    }
  } else {
    CAROUSEL.classList.add('transition-left') 
    createCardTemplate('left');
  }

  setTimeout(() => {
    if (move === 'move-three-items') {
      for (let i = 0; i < 3; i++) {
        currentSlides[i].remove();
        CAROUSEL.classList.remove('three-transition-left')
      }
    } else {
      currentSlides[0].remove();
      CAROUSEL.classList.remove('transition-left')
    }
    
    BTN_RIGHT.addEventListener('click', left)
    BTN_LEFT.addEventListener('click', right)
  }, 990)
}

function right(move) {
  let currentSlides = document.querySelectorAll('.slider__card');
  BTN_LEFT.removeEventListener('click', right)
  BTN_RIGHT.removeEventListener('click', left)

  if (move === 'move-three-items') {
    for (let i = 0; i < 3; i++) {
      CAROUSEL.classList.add('three-transition-right') 
      createCardTemplate('right');
    }
  } else {
    CAROUSEL.classList.add('transition-right') 
    createCardTemplate('right');
  }
  
  setTimeout(() => {
    if (move === 'move-three-items') {
      for (let i = 0; i < 3; i++) {
        currentSlides[currentSlides.length - 1].remove();
        CAROUSEL.classList.remove('three-transition-right')
      }
    } else {
      currentSlides[currentSlides.length - 1].remove();
      CAROUSEL.classList.remove('transition-right')
    }

    BTN_LEFT.addEventListener('click', right)
    BTN_RIGHT.addEventListener('click', left)
  }, 990)
}

const createInitTemplate = () => {
  for (let i = 0; i < 3; i++) {
    createCardTemplate()
  }
}

createInitTemplate()



BTN_RIGHT.addEventListener('click', () => left('click'))
BTN_LEFT.addEventListener('click', () => right('click'))

BTN_RIGHT_THREE.addEventListener('click', () => left('move-three-items'))
BTN_LEFT_THREE.addEventListener('click', () => right('move-three-items'))