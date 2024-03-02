import phone from "../../imgs/phone.svg";
import mail from "../../imgs/email.svg";
import linkedin from "../../imgs/social-media/linkedin.svg";
import github from "../../imgs/social-media/github.svg";
import youtube from "../../imgs/social-media/youtube.svg";
import agatha from "../../imgs/footer.jpg";

const array = [phone, mail, linkedin, github, youtube, agatha];
const imgs = document.querySelectorAll("footer img");

export default function footerImgs() {
  console.log(imgs);
  let i = 0;
  imgs.forEach((element) => {
    element.src = array[i];
    i++;
  });
}
