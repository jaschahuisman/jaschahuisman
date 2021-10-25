import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ISectionProps extends React.HtmlHTMLAttributes<HTMLElement> {
	pin?: boolean;
	animateIn?: boolean;
	setScrollProgress?: React.Dispatch<React.SetStateAction<number>>;
}

const Section: React.FC<ISectionProps> = ({ pin, animateIn = true, setScrollProgress, ...props }) => {
	const sectionRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (pin) {
			gsap.registerPlugin(ScrollTrigger);
			gsap.from(sectionRef.current, {
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top top',
					end: '150% top',
					snap: 0.1,
					pin: true,
					onUpdate: (scroll) => {
						if (setScrollProgress) {
							setScrollProgress(scroll.progress);
						}
					},
				},
			});
		}
		if (animateIn) {
			gsap.from(sectionRef.current, {
				opacity: 0,
				bottom: -50,
				transform: 'scale(0.95)',
				scrollTrigger: {
					trigger: sectionRef.current,
					toggleActions: 'restart none none none',
					start: 'top 90%',
					end: 'bottom 80%',
					scrub: true,
				},
			});
		}
	}, []);

	return <section {...props} ref={sectionRef} className={`section ${props.className}`} role='group' />;
};

export default Section;
