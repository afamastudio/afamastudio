// Burguer Menu

function myFunction(x) {
    x.classList.toggle("none");
}

((d) => {
    const $btnMenu = d.querySelector(".burguer"),
      $menu = d.querySelector(".full-screen-menu");
  
    $btnMenu.addEventListener("click", (e) => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });
  
    d.addEventListener("click", (e) => {
      if (!e.target.matches(".full-screen-menu a")) return false;
  
      $btnMenu.classList.remove("none");
      $menu.classList.remove("is-active");
    });
  })(document);