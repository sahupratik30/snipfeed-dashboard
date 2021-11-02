import liveStream from "../images/block images/live-stream.svg";
import shoutout from "../images/block images/shoutout.svg";
import content from "../images/block images/content.svg";
import tip from "../images/block images/tip.svg";
const items = [
  {
    image: <img src={liveStream} alt="block item" />,
    text: "Livestreams",
    color: "rgb(255, 238, 242)",
  },
  {
    image: <img src={shoutout} alt="block item" />,
    text: "Shoutouts/Q&As",
    color: "rgb(254, 248, 212)",
  },
  {
    image: <img src={content} alt="block item" />,
    text: "Exclusive Content",
    color: "rgb(243, 238, 255)",
  },
  {
    image: <img src={tip} alt="block item" />,
    text: "Tipping",
    color: "rgb(255, 245, 247)",
  },
];
export default items;
