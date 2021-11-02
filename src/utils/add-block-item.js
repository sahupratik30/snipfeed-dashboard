import customLink from "../images/block images/custom-link.svg";
import mailingList from "../images/block images/mailing-list.svg";
import social from "../images/block images/social.svg";
import text from "../images/block images/text.svg";
import music from "../images/block images/music.svg";
import video from "../images/block images/video.svg";
import product from "../images/block images/product.svg";
const items = [
  {
    image: <img src={customLink} alt="block item"></img>,
    text: "Custom link",
    color: "rgb(242, 241, 255)",
  },
  {
    image: <img src={mailingList} alt="block item"></img>,
    text: "Mailing List",
    color: "rgb(231, 253, 245)",
  },
  {
    image: <img src={social} alt="block item"></img>,
    text: "Link Your Socials",
    color: "rgb(237, 251, 255)",
  },
  {
    image: <img src={text} alt="block item"></img>,
    text: "Text",
    color: "rgb(252, 240, 223)",
  },
  {
    image: <img src={music} alt="block item"></img>,
    text: "Music/Podcast Preview",
    color: "rgb(242, 245, 255)",
  },
  {
    image: <img src={video} alt="block item"></img>,
    text: "Video Preview",
    color: "rgb(255, 243, 240)",
  },
  {
    image: <img src={product} alt="block item"></img>,
    text: "Product",
    color: "rgb(232, 252, 246)",
  },
];
export default items;
