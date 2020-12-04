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
