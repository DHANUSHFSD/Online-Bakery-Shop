const CartItem = document.querySelector('.cart-icon')
const cart=document.querySelector('.cart')
const CloseCart = document.querySelector('#cart-close')
const SearchIcon = document.querySelector('.search-icon')
const SearchForm = document.querySelector('.search-form')
const CloseSearch = document.querySelector('.home')
const MenuIcon =  document.querySelector('.menu-icon')
const MenuForm = document.querySelector('.navbar')
//Cart Add and Close Event//
CartItem.addEventListener('click',()=>{
    cart.classList.add('active')
    SearchForm.classList.remove('active');
    MenuForm.classList.remove('active')
})
CloseCart.addEventListener('click',()=>{
    cart.classList.remove('active')
})
//Remove search form
CloseSearch.addEventListener('click',()=>{
    SearchForm.classList.remove('active')
})
// Search form add
SearchIcon.addEventListener('click',()=>{
    SearchForm.classList.add('active')
    cart.classList.remove('active');
    MenuForm.classList.remove('active')
})
//menu icon
MenuIcon.addEventListener('click',()=>{
    MenuForm.classList.add('active')
    cart.classList.remove('active');
    SearchForm.classList.remove('active');
})

