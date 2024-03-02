import "./scss/style.scss";
import { toggleNav, navButtons } from "./modules/dom/navbar";
import drawProjects from "./modules/dom/myProjects";
import footerImgs from "./modules/dom/footer";

import me from "./imgs/me.webp";

footerImgs();
navButtons();
drawProjects();
toggleNav();

// pictures

const pictureAboutMe = document.querySelector("#aboutMe img");
pictureAboutMe.src = me;
