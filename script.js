const menuActive = document.querySelector('.main1__menu'); // Находим меню
const burger = document.querySelector('.user-list__item-menu'); // Находим кнопку бургера
const menuClose = document.querySelector('.main1__xmark'); // Находим кнопку крестика

function toggleMenu() {
	menuActive.classList.toggle('m1-menu__hide'); //Ф-ция удаляет или устанавливает класс с названием 'hidden' в div с классом .main1__menu
}

burger.addEventListener('click', toggleMenu); // По клику на бургер срабатывает ф-ция
menuClose.addEventListener('click', toggleMenu); // По клику на крестик срабатывает ф-ция
