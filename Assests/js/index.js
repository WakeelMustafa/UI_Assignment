const nav = document.getElementById('mainNav');
window.onscroll = function () { 
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    nav.classList.add("nav-colored");
    nav.classList.remove("navbar-light");
  }
  else {
    nav.classList.add("navbar-light");
    nav.classList.remove("nav-colored");
  }
};