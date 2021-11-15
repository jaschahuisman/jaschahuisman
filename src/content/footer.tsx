import Button from "@/components/atoms/Button.vue";
import IconGithub from "~icons/mdi/github";
import IconBehance from "~icons/mdi/behance";

export const footerSections: Array<{
  title: string;
  text: string;
  component?: any;
}> = [
  {
    title: "Interested in my work?",
    text: "Did I make you curious about my work? View my complete portfolio and follow my work!",
    component: (
      <Button
        variant="primary"
        href="https://www.behance.net/jaschahuisman"
        newTab
      >
        <IconBehance />
        Visit my portfolio
      </Button>
    ),
  },
  {
    title: "I'm an open book.",
    text: "I like to open source most of my projects, so that everyone can learn something from my projects.",
    component: (
      <Button
        variant="secondary"
        href="https://www.github.com/jaschahuisman/jaschahuisman"
        newTab
      >
        <IconGithub />
        Check the repo
      </Button>
    ),
  },
  {
    title: "Let's connect.",
    text: "Give me a call, or even a text message will work. Then we we'll talk about what we can do for each other.",
  },
];
