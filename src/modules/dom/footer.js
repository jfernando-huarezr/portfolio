import phone from "../../imgs/phone.svg";
import mail from "../../imgs/email.svg";
import linkedin from "../../imgs/social-media/linkedin.svg";
import github from "../../imgs/social-media/github.svg";
import youtube from "../../imgs/social-media/youtube.svg";
import agatha from "../../imgs/footer.jpg";

const array = [phone, mail, linkedin, github, youtube, agatha];
const imgs = document.querySelectorAll("footer img");

export default function footerImgs() {
  let i = 0;
  imgs.forEach((element) => {
    // eslint-disable-next-line no-param-reassign
    element.src = array[i];
    i += 1;
  });
}
