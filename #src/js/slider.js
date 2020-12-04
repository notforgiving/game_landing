// /* slider */
// const btn = document.querySelector(".slider__arrow");

// const widthItem = 500;
// const amount = 3;
// let scale = 1;
// const stepDicrim = 0.05;
// const classSlider = `slider__accordion`;
// const activeClass = `item__active`;
// const itemClass = `slider__accordion-item`;

// const classDots = `slider__dots`;
// const classDotsItem = `slider__dost-item`;
// const activeDot = `active-dot`;

// let position = 0;
// const stepPosition = 40;
// const zIndexActive = 8;

// const style = {
//   width: `${widthItem}px`,
//   zIndex: zIndexActive,
// };

// const accordion = document.querySelector(`.${classSlider}`);
// const list = accordion.querySelectorAll(`.${itemClass}`);

// const dots = document.querySelector(`.${classDots}`);
// const dotsItem = dots.querySelectorAll(`.${classDotsItem}`);

// for (let i = 0; i < amount; i++) {
//   if (i == 0) {
//     list[i].style.width = style.width;
//     list[i].style.zIndex = style.zIndex;
//     list[i].style.transform = `scale(${scale})`;
//     list[i].style.left = `${position}px`;
//   } else {
//     scale -= stepDicrim;
//     position += stepPosition;
//     list[i].style.width = style.width;
//     list[i].style.zIndex = style.zIndex - i;
//     list[i].style.transform = `scale(${scale})`;
//     list[i].style.left = `${position}px`;
//   }

//   dotsItem[i].id = i;

//   if (list[i].style.zIndex == zIndexActive) {
//     list[i].classList.add(`${activeClass}`);
//     dotsItem[i].classList.add(`${activeDot}`);
//   } else {
//     list[i].classList.remove(`${activeClass}`);
//     dotsItem[i].classList.remove(`${activeDot}`);
//   }
// }

// let tempStyle = "";

// btn.addEventListener("click", () => {
//   for (let i = 0; i < amount; i++) {
//     tempStyle = list[i].style.cssText;
//     list[i].style.cssText = list[amount - 1].style.cssText;
//     list[amount - 1].style.cssText = tempStyle;

//     if (list[i].style.zIndex == zIndexActive) {
//       list[i].classList.add(`${activeClass}`);
//       dotsItem[i].classList.add(`${activeDot}`);
//     } else {
//       list[i].classList.remove(`${activeClass}`);
//       dotsItem[i].classList.remove(`${activeDot}`);
//       list[i].style.animation = `1.5s ease-out downopacity`;
//     }
//   }
// });

// dotsItem.forEach((item) => {
//   item.addEventListener("click", () => {
//     let stop = true;
//     while (stop) {
//       if (stop) {
//         for (let i = 0; i < amount; i++) {
//           tempStyle = list[i].style.cssText;
//           list[i].style.cssText = list[amount - 1].style.cssText;
//           list[amount - 1].style.cssText = tempStyle;

//           if (list[i].style.zIndex == zIndexActive) {
//             list[i].classList.add(`${activeClass}`);
//             dotsItem[i].classList.add(`${activeDot}`);
//           } else {
//             list[i].classList.remove(`${activeClass}`);
//             dotsItem[i].classList.remove(`${activeDot}`);
//             list[i].style.animation = `1.5s ease-out downopacity`;
//           }

//           if (list[item.id].style.zIndex == zIndexActive) {
//             stop = false;
//             break;
//           }
//         }
//       }
//     }
//   });
// });
