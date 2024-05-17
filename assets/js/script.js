const menuBtn = document.querySelector(".res_menu_toggle_btn");
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
});

const menuItems = document.querySelectorAll(
  ".navbar_main > .navbar > ul > li:has(ul)"
);
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
  subMenuHeight += 5;
  menuItem
    .querySelector("ul")
    .style.setProperty("--height", subMenuHeight + "px");
}

// Toggling the Language

const defaultImageFolder = "eng_images";
const newImageFolder = "fr_images";

const changeLangBtn = document.getElementById("change_lang_btn");

function changeLang() {
  // Changing the text of Elements
  const elems = document.querySelectorAll("[fr-lang]");
  elems.forEach((elem) => {
    const curText = elem.textContent;
    const newText = elem.getAttribute("fr-lang");
    elem.textContent = newText;
    elem.setAttribute("fr-lang", curText);
  });

  // Changing the Image URL
  const images = document.querySelectorAll("img[change-image-lang]");
  images.forEach((image) => {
    const curURL = image.src;
    image.src = curURL.split(defaultImageFolder).join(newImageFolder);
  });

  // Changing the Lang Btn text
  changeLangBtn.innerText = "EN";
}

const urlPath = window.location.pathname;
if (urlPath.includes("/fr")) changeLang();
