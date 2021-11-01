import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface IUseAnimator {
  animateFrom(element: gsap.TweenTarget, options?: gsap.TweenVars): void;
  animateTo(element: gsap.TweenTarget, options?: gsap.TweenVars): void;
}

export default function useAnimator(): IUseAnimator {
  gsap.registerPlugin(ScrollTrigger);
  return {
    animateFrom(element: gsap.TweenTarget, options: gsap.TweenVars) {
      gsap.from(element, options);
    },
    animateTo(element: gsap.TweenTarget, options: gsap.TweenVars) {
      gsap.to(element, options);
    },
  };
}
