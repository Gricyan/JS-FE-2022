/* SLIDER */

const BTN_LEFT = document.querySelector(".slider__arrow_left");
const BTN_RIGHT = document.querySelector(".slider__arrow_right");
const CAROUSEL = document.querySelector(".carousel");
const ITEM_ACTIVE = document.getElementsByClassName("item-active");
const ITEM_LEFT = document.getElementsByClassName("item-left");
const ITEM_RIGHT = document.getElementsByClassName("item-right");

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = ITEM_RIGHT;
    for (let i = 0; i < ITEM_ACTIVE.length; i++) {
      ITEM_RIGHT[i].innerHTML = ITEM_ACTIVE[i].innerHTML
      ITEM_ACTIVE[i].innerHTML = ITEM_LEFT[i].innerHTML
      ITEM_LEFT[i].innerHTML = changedItem[i].innerHTML
    }
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedItem = ITEM_LEFT;
    for (let i = 0; i < ITEM_ACTIVE.length; i++) {
      ITEM_LEFT[i].innerHTML = ITEM_ACTIVE[i].innerHTML
      ITEM_ACTIVE[i].innerHTML = ITEM_RIGHT[i].innerHTML
      ITEM_RIGHT[i].innerHTML = changedItem[i].innerHTML
    }
  }

  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})