const CAROUSEL = document.querySelector('.pets__gallery');

const createGalleryCard = (idx) => {
  const galleryCard = document.createElement("div");
  galleryCard.classList.add("slider__card");
  galleryCard.setAttribute('data-id', pets[idx].id);
  galleryCard.innerHTML = `
  <img src="../${pets[idx].img}" alt="${pets[idx].name}">
  <div class="slider__title">${pets[idx].name}</div>
  <a href="#" class="button slider__button button_disabled">Learn more</a>`
  console.log(galleryCard)
  CAROUSEL.append(galleryCard)
}

const createGallery = () => {
  for (let i = 0; i < 8; i++) {
    createGalleryCard(i)

  }
}

createGallery()