import "./scss/style.scss";
import { toggleNav, navButtons } from "./modules/dom/navbar";
import drawProjects from "./modules/dom/myProjects";
import footerImgs from "./modules/dom/footer";
import { hideDropdown, intersection } from "./modules/dom/htmlHelpers";

import me from "./imgs/me.webp";

footerImgs();
navButtons();
drawProjects();
toggleNav();
hideDropdown();
intersection();

// pictures

const pictureAboutMe = document.querySelector("#aboutMe img");
pictureAboutMe.src = me;
