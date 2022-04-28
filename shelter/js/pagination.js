const CAROUSEL = document.querySelector('.pets__gallery');

// RANDOM NUMBER GENERATOR

const generateArrayRandomNumber = (min, max) => {
  let totalNumbers = max - min + 1,
    arrayTotalNumbers = [],
    arrayRandomNumbers = [],
    tempRandomNumber;

  while (totalNumbers--) {
    arrayTotalNumbers.push(totalNumbers + min);
  }

  while (arrayTotalNumbers.length) {
    tempRandomNumber = Math.round(Math.random() * (arrayTotalNumbers.length - 1));
    arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
    arrayTotalNumbers.splice(tempRandomNumber, 1);
  }
  return arrayRandomNumbers;
}

// GALLERY CREATOR

let gallery = []

const createGalleryCard = (idx) => {
  const galleryCard = document.createElement("div");
  galleryCard.classList.add("slider__card");
  galleryCard.setAttribute('data-id', pets[idx].id);
  galleryCard.innerHTML = `
  <img src="./${pets[idx].img}" alt="${pets[idx].name}">
  <div class="slider__title">${pets[idx].name}</div>
  <a href="#" class="button slider__button button_disabled">Learn more</a>`
  gallery.push(galleryCard)
}

// console.log(gallery)

// CREATE 48-ITEMS RANDOM ARRAY

let bigRandomArray = []

const createRandomArray = () => {
  let bigTemporaryArray = []
  for (let i = 0; i < 6; i++) {
    let smallTemporaryArray = generateArrayRandomNumber(0, 7);
    bigTemporaryArray.push(...smallTemporaryArray);
  }
  return bigRandomArray = bigTemporaryArray
}

createRandomArray()
console.log(bigRandomArray)

// GENERATE 8-ITEMS GALLERY

const createSmallRandomGallery = () => {
  let smallRandomGalleryArray = generateArrayRandomNumber(0, 7)
  smallRandomGalleryArray.forEach(galleryInx => {
    createGalleryCard(galleryInx)
  })
  console.log(smallRandomGalleryArray)
}


const createFullScreenGallery = () => {
  createSmallRandomGallery()
  for (let i = 0; i < 8; i++) {
    CAROUSEL.append(gallery[i])
  }
}
createFullScreenGallery()

const BTN_NEXT = document.querySelector('.paginator_next')
BTN_NEXT.addEventListener('click', () => {
  console.log('smallRandomGalleryArray')
  CAROUSEL.innerHTML = '';

  createFullScreenGallery();
})