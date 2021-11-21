import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function sectionAnimations(sectionElement: null) {
  gsap.from(sectionElement, {
    opacity: 0,
    y: 10,
    scale: 0.97,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: sectionElement,
      start: "top 90%",
      end: "60% 30%",
      scrub: true,
    },
  });
}

export function headerAnimations(
  headerElement: Element,
  headerTitleElement: Element,
  headerImageElement: Element,
) {
  const headerInTl = gsap.timeline({
    defaults: {
      duration: 1,
      delay: 0.2,
      ease: "power2.inOut",
    },
  });
  const headerOutTl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: headerElement,
        start: "0 25%",
        end: "bottom top",
        scrub: true,
      },
    },
  });

  headerInTl.from(headerElement, { y: 20, opacity: 0 });
  headerOutTl
    .to(headerTitleElement, { y: -10, opacity: 0 })
    .to(headerImageElement, { rotateZ: 5, y: -100, opacity: 0 });
}

export function timelineAnimations(
  timelineElement: Element,
  timelineStemElement: Element,
  timelineElements: Element[],
): void {
  const trigger = {
    trigger: timelineElement,
    start: "top 50%",
    end: "bottom 50%",
  };
  gsap.from(timelineStemElement, {
    opacity: 0,
    height: 0,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      ...trigger,
      scrub: true,
    },
  });
  gsap.from(timelineElements, {
    opacity: 0,
    y: -70,
    duration: 1.5,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      ...trigger,
      toggleActions: "play none none reverse",
    },
  });
}

export function footerAnimations(
  footerElement: Element,
  footerElements: Element[],
): void {
  gsap.from(footerElements, {
    opacity: 0,
    duration: 1,
    delay: 0.3,
    y: -20,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: footerElement,
      start: "top 90%",
      end: "bottom 90%",
      toggleActions: "play none none reverse",
    },
  });
}
