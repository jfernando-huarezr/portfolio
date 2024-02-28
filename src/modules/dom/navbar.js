const BODY = document.querySelector("body");

const nav = BODY.querySelector("nav");
const buttonMenu = BODY.querySelector("nav .menu-control");
const dropdownMenu = nav.querySelector(".dropdown-menu");

export default function toggleNav() {
  buttonMenu.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      dropdownMenu.classList.add("visible");
    }
  });

  window.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
      dropdownMenu.classList.remove("visible");
    }
  });
}
