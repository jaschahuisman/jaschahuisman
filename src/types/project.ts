export interface IProject {
  title: string;
  slug: string;
  description: string;
  date: string;
  image: string;
  categories?: string[];
  cta?: { text: string; url: string };
  content?: { title: string; content: string }[];
  associations?: { company: string; url: string; image: string }[];
  tools?: { name: string; url: string }[];
  links?: { label: string; url: string }[];
}
