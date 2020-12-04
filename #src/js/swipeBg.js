const swipe = document.querySelector(".swipe__btns-arrow");
const body = document.querySelector(".header");
const dots = document.querySelectorAll(".swipe__btns-dot");
let image = [
  { img: "header_bg.jpg", active: true },
  { img: "system.jpg", active: false },
  { img: "features_bg.jpg", active: false },
  { img: "system.jpg", active: false },
];

for (let i = 0; i < image.length; i++) {
  if (image[i].active) {
    body.style.backgroundImage = `url(./../img/${image[0].img})`;
    dots[i].classList.add("active-swipe");
  }
}

let next = undefined;

const swipe_action = (arrow, id) => {
  if (arrow) {
    for (let i = 0; i < image.length; i++) {
      if (image[i].active) {
        i === image.length - 1 ? (next = 0) : (next = i + 1);
        image[i].active = false;
        dots[i].classList.remove("active-swipe");
      }
    }
    image[next].active = true;
    body.style.backgroundImage = `url(./../img/${image[next].img})`;
    dots[next].classList.add("active-swipe");
  }
  if (id >= 0) {
    for (let i = 0; i < image.length; i++) {
      if (image[i].active) {
        next = id;
        image[i].active = false;
        dots[i].classList.remove("active-swipe");
      }
    }
    image[next].active = true;
    body.style.backgroundImage = `url(./../img/${image[next].img})`;
    dots[next].classList.add("active-swipe");
  }
};

swipe.addEventListener("click", () => {
  swipe_action(true);
});

dots.forEach((item, index) => {
  item.addEventListener("click", () => {
    swipe_action(false, index);
  });
});
