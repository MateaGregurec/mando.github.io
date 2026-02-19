/* dodajemo event listener na sve s id-jem mobile-menu */
//dogodi se toggle  za menu i menu_links 

const menu = document.querySelector('#mobile-menu'); //sve sto ima mobile menu id sad je nazvano menu
const menu_links = document.querySelector('.navbar_menu');
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');     //click, onda prebaci klasu na is-active; ako vec postoji, onda ju makne  
    menu_links.classList.toggle('active');  //click, prebaci klasu na active; ako ju ima, makne ju 
});
