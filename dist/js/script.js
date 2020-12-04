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

// const featuresAcc = document.querySelector('.features__accordion')
// const accItems = featuresAcc.querySelectorAll('.accordion__item')

// let maxcount = 3

// accItems.forEach((item,index) => {
//   item.id = `${index}${index}`
// });

// for(let i=0;i<maxcount;i++){
//   accItems[i].addEventListener('click',()=>{
//     let visible = document.querySelector('.visible')
//     visible.classList.remove('visible')
//     visible.getElementsByClassName.animation = `animation: accordOUT 1s ease-in forwards`


//     let dot = document.querySelector('.active__title')
//     dot.classList.remove('active__title')


//     let novisible = accItems[i].querySelector('.accordion__item-desc')
//     novisible.classList.add('visible')
    

//     let newTitle = accItems[i].querySelector('.accordion__item-title')
//     newTitle.classList.add('active__title')

//   })
// }




// const langSwitch = document.querySelector('.header__top-lang')
// const langs =document.querySelector('.lang__select-other')

// langSwitch.addEventListener('click',()=>{
//   langs.classList.toggle('no__visible-lang')
// })
const width = window.innerWidth;
const menu = document.querySelector(".header__top-navmenu");
const pc = document.querySelector(".header__top-pc");
const positionMenu = document.querySelector(".header__top-right");
const btn = document.querySelector(".mobile__menu");
const popap = document.querySelector(".mobile__popap");
const closemenu = document.querySelector('.mobile__popap-close')

const hideMenu = () => {
  menu.style.display = "none";
  pc.style.display = "none";
  console.log("yes");
};

const moveMenu = () =>{
  popap.append(menu)
  popap.append(pc)
}

if (width <= 960) {
  // hideMenu();
  moveMenu()
}

window.addEventListener("resize", function () {
  if (width <= 960) {
    moveMenu()
  }
});

btn.addEventListener("click", () => {
  popap.classList.add('mobile__popap-show')
});

closemenu.addEventListener('click',()=>{
  popap.classList.remove('mobile__popap-show')
})

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
