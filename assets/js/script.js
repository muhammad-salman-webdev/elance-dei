const menuBtn = document.querySelector(".res_menu_toggle_btn");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
});

const menuItems = document.querySelectorAll(".navbar_main > .navbar > ul > li");
menuItems.forEach((menuItem, i) => {
  // Click to open the sub menu on mobile screen
  const trigger = menuItem.querySelector("div");
  trigger.addEventListener("click", () => {
    menuItems.forEach((_menuItem, _i) => {
      if (i == _i) _menuItem.classList.toggle("active");
      else _menuItem.classList.remove("active");
    });
  });

  //  calling the function to set the height of sub menu when window resize
  window.addEventListener("resize", () => setHeightOfSubMenu(menuItem));
  setHeightOfSubMenu(menuItem);
});

// Setting the height of the sub menu
function setHeightOfSubMenu(menuItem) {
  const subMenuItems = menuItem.querySelectorAll("ul > li");
  let subMenuHeight = 0;
  subMenuItems.forEach((subMenuItem) => {
    subMenuHeight += subMenuItem.offsetHeight;
  });

  menuItem
    .querySelector("ul")
    .style.setProperty("--height", subMenuHeight + "px");
}
