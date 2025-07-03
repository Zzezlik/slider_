const sliderHolder = document.querySelector(".slider-holder");
const BASE_URL =
  "https://api.unsplash.com/photos/random/?client_id=_QFp8x3VbP5286tRIoms-NZCkH3mA_6boYK0gxeSMTY";

const fetchingPhotos = async () => {
  try {
    const res = await fetch(`${BASE_URL}&count=7`);
    if (!res) throw new Error(res.status);
    const photos = await res.json();

    photos.forEach((el) => {
      // console.dir(el);
      sliderHolder.insertAdjacentHTML(
        "beforeend",
        `<img src="${el.urls.full}" alt="${el.alt_description}"/>`
      );
    });
  } catch (error) {
    console.dir(error);
  }
};

fetchingPhotos();

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
