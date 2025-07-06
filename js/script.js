import { fetchingPhotos } from "./modules/fetch.js";

fetchingPhotos();

const sliderHolder = document.querySelector(".slider-holder");
let index = 0;
const imgWidth = 258;

const updateState = (e) => {
  console.dir(e);
  sliderHolder.style.transform = `translateX(-${index * imgWidth}px)`;
};

document.querySelector(".next").addEventListener("click", (e) => {
  console.dir(e);
  if (index < sliderHolder.children.length - 3) {
    index++;
    updateState();
  }
});

document.querySelector(".prev").addEventListener("click", (e) => {
  console.dir(e);
  if (index > 0) {
    index--;
    updateState();
  }
});
