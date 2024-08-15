import { IoMdImages } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { MdEmojiFlags, MdOutlineMailOutline } from "react-icons/md";

const _MarketingItems = [
  {
    icon: <MdOutlineMailOutline />,
    title: "Responsive",
    text: "I am always available via phone, text, or email.",
    style: "bg-primary-default text-secondary-text",
  },
  {
    icon: <MdEmojiFlags />,
    title: "Syndication",
    text: "I market your property locally, nationally, and internationally.",
    style: "bg-secondary-default text-primary-text ",
  },
  {
    icon: <GrMapLocation />,
    title: "Virtual Tour",
    text: "Let's make your home stand out with a high quality virtual tour.",
    style: "bg-primary-dark text-secondary-text",
  },
  {
    icon: <IoMdImages />,
    title: "Photography",
    text: "Beautiful, high-end photography is a central part of our marketing plan for your property.",
    style: "bg-primary-dark-10 text-secondary-text",
  },
];
export default _MarketingItems;
