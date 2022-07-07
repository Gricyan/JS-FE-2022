const CAROUSEL = document.querySelector('.pets__gallery');
const arrowButtons  = document.querySelectorAll('.arrow-btn');
const currentPageNumberContainer = document.querySelector('.current-page-number');

const BtnPagePrePre = document.querySelector('.paginator_pre-pre');
const BtnPagePre = document.querySelector('.paginator_pre');
const BtnPageNext = document.querySelector('.paginator_next');
const BtnPageNextNext = document.querySelector('.paginator_next-next');


// CREATE STRICT ARRAY

let orderedArray = []
const intOrderedArray = () => {
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 8; j++) {
      orderedArray.push(j)
    }
  }
  return orderedArray
}
intOrderedArray()


// CREATE SHUFFLED MATRIX

const shuffledMatrix = function (orderedArray, elementsPerRow) {
  let mtx = [], i, k;
  for (i = 0, k = -1; i < orderedArray.length; i++) {
    if (i % elementsPerRow === 0) {
      k++;
      mtx[k] = [];
    }
    mtx[k].push(orderedArray[i]);
  }
  for (let i = 0; i < mtx.length; i++) {
    mtx[i].sort(() => Math.random() - 0.5);
  }
  return mtx;
}
let matrix = shuffledMatrix(orderedArray, 8);



// GALLERY CARDS CREATOR

const createGalleryCard = (idx) => {
  const galleryCard = document.createElement("div");
  galleryCard.classList.add("slider__card");
  galleryCard.setAttribute('data-id', pets[idx].id);
  galleryCard.innerHTML = `
  <img src="./${pets[idx].img}" alt="${pets[idx].name}">
  <div class="slider__title">${pets[idx].name}</div>
  <a href="#" class="button slider__button button_disabled">Learn more</a>`
  CAROUSEL.append(galleryCard);
}


// GALLERY GENERATOR 

const createGallery = (row) => {
  CAROUSEL.innerHTML = '';
  for (let i = 0; i < matrix[row - 1].length; i++) {
    createGalleryCard(matrix[row - 1][i]);    
  }
  currentPageNumberContainer.innerHTML = row;
}


// ADD EVENT LISTENERS FOR ARROW BUTTONS

BtnPagePre.addEventListener('click', preBtnHandler);
BtnPagePrePre.addEventListener('click', prePreBtnHandler);


function preBtnHandler() {
  let currentPageNumber = currentPageNumberContainer.innerHTML
  currentPageNumber -= 1;  
  createGallery(currentPageNumber);
  currentPageNumberContainer.innerHTML = currentPageNumber;

  if (currentPageNumber > 1 && currentPageNumber < matrix.length) {    
    enableAllArrows();
    arrowsStyleReset();
    addArrowStyleActive()
  } else if (currentPageNumber <= 1) {
    disableLeftArrowsStyle();
    disableLeftArrows();
  }  
}

function prePreBtnHandler() {
  currentPageNumber = 1;
  createGallery(currentPageNumber);
  currentPageNumberContainer.innerHTML = currentPageNumber;
  disableLeftArrowsStyle();
  disableLeftArrows();
}


BtnPageNext.addEventListener('click', nextBtnHandler)
BtnPageNextNext.addEventListener('click', nextNextBtnHandler)

function nextBtnHandler() {
  let currentPageNumber = +currentPageNumberContainer.innerHTML;
  currentPageNumber += 1;
  createGallery(currentPageNumber);
  currentPageNumberContainer.innerHTML = currentPageNumber;

  if (currentPageNumber > 1 && currentPageNumber < matrix.length) {    
    enableAllArrows();
    arrowsStyleReset();
    addArrowStyleActive()
  } else if (currentPageNumber >= matrix.length) {
    disableRightArrowsStyle()
    disableRightArrows();
  }  
}

function nextNextBtnHandler() {
  currentPageNumber = matrix.length;
  createGallery(currentPageNumber);
  currentPageNumberContainer.innerHTML = currentPageNumber;
  disableRightArrowsStyle()
  disableRightArrows();
}

function arrowsStyleReset() {
  arrowButtons.forEach(item => {
    item.classList.remove('paginator_active'); 
  });
} 

function addArrowStyleActive() {
  arrowButtons.forEach(item => {
    item.classList.add('paginator_active'); 
  });
} 

function disableRightArrowsStyle() {
  BtnPageNext.classList.remove('paginator_active');  
  BtnPageNextNext.classList.remove('paginator_active');
  BtnPagePre.classList.add('paginator_active');  
  BtnPagePrePre.classList.add('paginator_active');
}

function disableLeftArrowsStyle() {
  BtnPageNext.classList.add('paginator_active');  
  BtnPageNextNext.classList.add('paginator_active');
  BtnPagePre.classList.remove('paginator_active');  
  BtnPagePrePre.classList.remove('paginator_active');
}

function disableRightArrows() {
  BtnPagePre.addEventListener('click', preBtnHandler);
  BtnPagePrePre.addEventListener('click', prePreBtnHandler);
  BtnPageNext.removeEventListener('click', nextBtnHandler);
  BtnPageNextNext.removeEventListener('click', nextNextBtnHandler);
}

function disableLeftArrows() {
  BtnPagePre.removeEventListener('click', preBtnHandler);
  BtnPagePrePre.removeEventListener('click', prePreBtnHandler);
  BtnPageNext.addEventListener('click', nextBtnHandler);
  BtnPageNextNext.addEventListener('click', nextNextBtnHandler);
}

function enableAllArrows() {
  BtnPagePre.addEventListener('click', preBtnHandler);
  BtnPagePrePre.addEventListener('click', prePreBtnHandler);
  BtnPageNext.addEventListener('click', nextBtnHandler);
  BtnPageNextNext.addEventListener('click', nextNextBtnHandler);
}


// INIT FIRST GALLERY

(function initFirstGallery() {
  if (window.innerWidth > 960) {
    matrix = shuffledMatrix(orderedArray, 8);    
  } else if (window.innerWidth <= 960 && window.innerWidth >= 768) {
    matrix = shuffledMatrix(orderedArray, 6);
  } else {
    matrix = shuffledMatrix(orderedArray, 3);
  }  
  createGallery(1);
  disableLeftArrows()
})()


// CHANGE NUMBER OF GALLERY ITEMS DEPENDS ON WINDOW SIZE


window.onresize = () => {  
  if (window.innerWidth > 960) {
    matrix = shuffledMatrix(orderedArray, 8); 
    currentPage = checkCurrentPageNumber(8);
    createGallery(currentPage);

  } else if (window.innerWidth <= 960 && window.innerWidth >= 768) {
    matrix = shuffledMatrix(orderedArray, 6);    
    currentPage = checkCurrentPageNumber(6);
    createGallery(currentPage);

  } else {
    matrix = shuffledMatrix(orderedArray, 3); 
    currentPage = checkCurrentPageNumber(3);
    createGallery(currentPage);
  }    
};

let checkCurrentPageNumber = function(rowsNumber) {

  let currentPageNum = +currentPageNumberContainer.innerHTML;

  if (matrix.length === 16 && currentPageNum === 8) {
    currentPageNum = matrix.length;
  } else if (matrix.length === 8 && currentPageNum === 6) {
    currentPageNum = matrix.length;
  } else if (currentPageNum > 48 / rowsNumber) {
    currentPageNum = 48 / rowsNumber;
  } 
  return currentPageNum;
}