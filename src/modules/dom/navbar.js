import hamburger from "../../imgs/menu.svg";

const navTitles = [
  { title: "About Me", section: "#aboutMe" },
  { title: "My Stack", section: "#myStack" },
  {
    title: "My Projects",
    section: "#myProjects",
  },
  {
    title: "Contact Me",
    section: "#contact",
  },
];

const nav = document.querySelector("nav");
const buttonMenu = document.querySelector("nav .menu-control");
const dropdownMenu = nav.querySelector(".dropdown-menu");
const imgDropdown = nav.querySelector("button img");

export function toggleNav() {
  imgDropdown.src = hamburger;
  buttonMenu.addEventListener("click", () => {
    dropdownMenu.classList.add("visible");
  });

  window.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
      dropdownMenu.classList.remove("visible");
    }
  });
}

export function navButtons() {
  navTitles.forEach((element) => {
    const navItem = document.createElement("li");
    navItem.textContent = element.title;

    navItem.addEventListener("click", () => {
      const section = document.querySelector(element.section);
      section.scrollIntoView({ behavior: "smooth" });

      dropdownMenu.classList.remove("visible");
    });

    dropdownMenu.appendChild(navItem);
  });
}
