//     ANIMACJA BURGERA      //
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

const showNav = () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}
burger.addEventListener('click', showNav);


//       HOW TO HIDE THE SIDE MENU WHEN YOU CLICK ON ITEM A     //
const hideList = () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}
const aItems = document.querySelectorAll('ul a');
aItems.forEach((item) => item.addEventListener("click", hideList))

