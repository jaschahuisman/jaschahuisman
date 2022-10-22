import AvansImage from "@/assets/timeline/avans.png";
import HandpickedImage from "@/assets/timeline/handpicked.svg?url";
import HkuImage from "@/assets/timeline/hku.svg?url";
import LabImage from "@/assets/timeline/lab.svg?url";

export const timelineItems: Array<{
  title: string;
  description: string;
  date: string;
  image: string;
}> = [
  {
    title: "Handpicked Agencies",
    date: "2020",
    description:
      "Tech elaboration internship and freelance work at Handpicked Lab.",
    image: HandpickedImage,
  },
  {
    title: "University of the Arts Utrecht",
    date: "2021",
    description: "Minor Extended Reality.",
    image: HkuImage,
  },
  {
    title: "Avans University of Applied Sciences",
    date: "2022",
    description:
      "Cum laude Bachelor degree Communication and Multimedia Design.",
    image: AvansImage,
  },
  {
    title: "Handpicked Lab",
    date: "2022",
    description:
      "Making new technology and innovation tangible at Handpicked Lab as Creative Technologist.",
    image: LabImage,
  },
];
