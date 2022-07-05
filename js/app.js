const burger = document.querySelector('.burger')
console.log(burger);
const menu = document.querySelector('.mobile-menu')
const menuList = menu.querySelector('.mobile-menu__list')
const menuListItem = menuList.querySelectorAll('.mobile-menu__list__item')
console.log(menuListItem);


burger.addEventListener('click',() => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})

menuListItem.forEach(function(item) {
    item.addEventListener('click', () => {
        burger.classList.remove('active')
        menu.classList.remove('active')
    })
})


