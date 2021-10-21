//     ANIMACJA BURGERA      //
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

const showNav = () => {
    burger.classList.toggle('active');
}
burger.addEventListener('click', showNav);