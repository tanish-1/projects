burger = document.querySelector('.burger');
searchbar = document.querySelector('.search-bar');
navlist = document.querySelector('.nav-list');
nav = document.querySelector('.nav');


const func = ()=>{
    nav.classList.toggle('h-nav')
    navlist.classList.toggle('h-visiblity')
    searchbar.classList.toggle('h-visiblity')
}

burger.addEventListener('click',func)