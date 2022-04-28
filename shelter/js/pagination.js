const CAROUSEL = document.querySelector('.pets__gallery');

// CREATE STRICT ARRAY

let strictArr = []
const createStrictArray = () => {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      strictArr.push(j)
    }
  }
  return strictArr
}
createStrictArray()


// CREATE MATRIX

const listToMatrix = (list, elementsPerSubArray) => {
  let matrix = [],
    i, k;
  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }
    matrix[k].push(list[i]);
  }
  return matrix;
}

let matrix = listToMatrix(strictArr, 8);

// SHUFFLE MATRIX

const shuffle = () => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].sort(() => Math.random() - 0.5);
  }
}
shuffle()

console.log(matrix)

// GALLERY WINDOW SIZE ADOPT

window.onresize = () => {
  if (window.innerWidth > 960) {
    matrix = listToMatrix(strictArr, 8);
    console.log(matrix)
  } else if (window.innerWidth <= 960 && window.innerWidth >= 768) {
    matrix = listToMatrix(strictArr, 6);
    console.log(matrix)
  } else {
    matrix = listToMatrix(strictArr, 3);
    console.log(matrix)
  }
};


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


// GALLERY GENERATOR 

const createGallery = (page) => {
  for (let i = 0; i < matrix[page].length; i++) {
    createGalleryCard(matrix[page][i])
    CAROUSEL.append(gallery[i])
  }
}

createGallery(0)


// const BTN_NEXT = document.querySelector('.paginator_next')
// BTN_NEXT.addEventListener('click', () => {
//   CAROUSEL.innerHTML = '';
//   createGallery(0);
// })