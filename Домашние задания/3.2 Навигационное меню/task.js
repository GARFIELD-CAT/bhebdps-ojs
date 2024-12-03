document.querySelectorAll(".menu__link").forEach((link) => {
  link.addEventListener("click", function (event) {
    let currentMenu = this.nextElementSibling;

    if (currentMenu && currentMenu.classList.contains("menu_sub")) {
      event.preventDefault();

      document.querySelectorAll(".menu_active").forEach((activeMenu) => {
        if (activeMenu !== currentMenu) {
          activeMenu.classList.remove("menu_active");
        }
      });

      currentMenu.classList.add("menu_active");
    }
  });
});
