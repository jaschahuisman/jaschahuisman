import AvansImage from "@/assets/timeline/avans.png";
import HandpickedImage from "@/assets/timeline/handpicked.svg";
import HkuImage from "@/assets/timeline/hku.svg";

export const timelineItems: Array<{
  title: string;
  description: string;
  date: string;
  image: string;
}> = [
  {
    title: "Avans University of Applied Sciences",
    date: "2019",
    description:
      "Propaedeutic year Bachelor Communication and Multimedia Design",
    image: AvansImage,
  },
  {
    title: "Handpicked Agencies",
    date: "2020",
    description:
      "Tech elaboration internship & freelance at Handpicked Labs innovation centre",
    image: HandpickedImage,
  },
  {
    title: "University of the Arts Utrecht",
    date: "2021",
    description: "Minor Extended Reality",
    image: HkuImage,
  },
];
