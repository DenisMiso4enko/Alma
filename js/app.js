// Бургер меню
const burger = document.querySelector('.burger')
const menu = document.querySelector('.mobile-menu')
const menuList = menu.querySelector('.mobile-menu__list')
const menuListItem = menuList.querySelectorAll('.mobile-menu__list__item')

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

// Аккардион
const accardions = document.querySelectorAll('.accardion__item')
//console.log(accardions);

const content = document.querySelectorAll('.accardion-text')

for (item of accardions) {
    item.addEventListener('click', function() {
        //console.log('click');
        if (this.classList.contains('active')) {
            this.classList.remove('active')
        } else {
            for(el of accardions) {
                el.classList.remove('active')
            }
            this.classList.add('active')
        }
    })
}
content.forEach(function(item) {
    item.addEventListener('click', function(e) {
       e.stopPropagation()
    })
})




