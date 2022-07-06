const CAROUSEL = document.querySelector('.pets__gallery');
const currentPageNumber = document.querySelector('.current-page-number');

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
console.log('strictArr: ', strictArr)

// CREATE SHUFFLED MATRIX

//let MATRIX = []

const listToMatrix = (list, elementsPerSubArray) => {
  let mtx = [],
    i, k;
  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      mtx[k] = [];
    }
    mtx[k].push(list[i]);
  }

  for (let i = 0; i < mtx.length; i++) {
    mtx[i].sort(() => Math.random() - 0.5);
  }

  return mtx;
}

let matrix = listToMatrix(strictArr, 8);

// console.log(matrix)


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

const createGallery = (matrix, page) => {
  console.log(matrix)
  console.log('first row: ', matrix[matrix.length - page])
  console.log('last row: ', matrix[page - 1])

  for (let i = 0; i < matrix[page - 1].length; i++) {
    createGalleryCard(matrix[matrix.length - page][i])
    CAROUSEL.append(gallery[i])

    // SHOW CURRENT PAGE NUMBER_OF_ITEMS
    currentPageNumber.innerHTML = i + 1;
  }
}

// createGallery(0)

const createInitGallery = (idx = 0) => {
  if (window.innerWidth > 960) {
    matrix = listToMatrix(strictArr, 8);
    createGallery(matrix, 6)
  } else if (window.innerWidth <= 960 && window.innerWidth >= 768) {
    matrix = listToMatrix(strictArr, 6);
    createGallery(matrix, 8)
  } else {
    matrix = listToMatrix(strictArr, 3);
    createGallery(matrix, 16)
  }
};

let randomInitIdx = matrix[0][0]

createInitGallery(randomInitIdx)

// CHANGE NUMBER OF GALLERY ITEMS DEPENDS ON WINDOW SIZE

const windowSizeRefresh = (matrix, randomInitIdx, numberOfItems) => {
  CAROUSEL.innerHTML = '';
  matrix = listToMatrix(strictArr, numberOfItems);
  createGallery(matrix, randomInitIdx)
}


window.onresize = () => {
  if (window.innerWidth > 960) {
    windowSizeRefresh(matrix, randomInitIdx, 8)
  } else if (window.innerWidth <= 960 && window.innerWidth >= 768) {
    windowSizeRefresh(matrix, randomInitIdx, 6)
  } else {
    windowSizeRefresh(matrix, randomInitIdx, 3)
  }
};





const BTN_NEXT = document.querySelector('.paginator_next')
BTN_NEXT.addEventListener('click', () => {
  //CAROUSEL.innerHTML = '';
  //console.log(randomInitIdx)
  //randomInitIdx = randomInitIdx + 1;
  createGallery(matrix, randomInitIdx)
  console.log(matrix)

})