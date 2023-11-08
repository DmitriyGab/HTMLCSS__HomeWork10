const menuActive = document.querySelector('.menu-active'); // Находим меню
const burger = document.querySelector('.user-list__item-menu'); // Находим кнопку бургера
const menuClose = document.querySelector('.menu-close'); // Находим кнопку крестика

function toggleMenu() {
	menuActive.classList.toggle('hidden'); //Ф-ция удаляет или устанавливает класс с названием 'hidden' в div с классом .menu-active
}

burger.addEventListener('click', toggleMenu); // По клику на бургер срабатывает ф-ция
menuClose.addEventListener('click', toggleMenu); // По клику на крестик срабатывает ф-ция
