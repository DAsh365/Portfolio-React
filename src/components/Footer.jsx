import envelopeIcon from "../assets/EmailIcon.svg";
import githubIcon from "../assets/GitHubLogo.svg";
import linkedinIcon from "../assets/LinkedinLogo.svg";
import XIcon from "../assets/XLogo.svg";
import instagramIcon from "../assets/InstagramLogo.svg";
import Icon from "./UI/Icon";

export default function Footer() {

  const images = [
    { id: 1, image: envelopeIcon, link: "mailto:ash.devan98@gmail.com" },
    { id: 2, image: githubIcon, link: "https://github.com/DAsh365" },
    { id:3,image: linkedinIcon, link: "https://www.linkedin.com/in/devan-ash-809283204" },
    { id: 4,image: XIcon, link: "https://twitter.com/ghost_shadow365" },
    { id: 5,image: instagramIcon, link: "https://www.instagram.com/devan_ash/" },
  ];

  return (
  <footer><Icon images={images} /></footer>);

}