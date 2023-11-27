let iconcart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close')
let body = document.querySelector('body');

iconcart.addEventListener('click',() => {
    body.classList.toggle('showcart')
})
closeCart.addEventListener('click',() => {
    body.classList.toggle('showcart')
})