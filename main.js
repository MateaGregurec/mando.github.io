/* dodajemo event listener na sve s id-jem mobile-menu */
//dogodi se toggle  za menu i menu_links 

const menu = document.querySelector('#mobile-menu'); //sve sto ima mobile menu id sad je nazvano menu
const menu_links = document.querySelector('.navbar_menu');
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');     //click, onda prebaci klasu na is-active; ako vec postoji, onda ju makne  
    menu_links.classList.toggle('active');  //click, prebaci klasu na active; ako ju ima, makne ju 
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});