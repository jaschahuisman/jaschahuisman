import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../../wrappers/Container';
import Section from '../../wrappers/Section';

const ExcerptSection: React.FC = () => {
	const excerptRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(excerptRef.current, {
			opacity: 0,
			bottom: -50,
			scrollTrigger: {
				trigger: excerptRef.current,
				toggleActions: 'restart none none none',
				start: 'top 90%',
				end: 'bottom 80%',
				scrub: true,
			},
		});
	}, []);

	return (
		<Container>
			<Section>
				<h2 className='excerpt' ref={excerptRef}>
					Since my legs can carry me, I have been in touch with tech, art and design. I have carried camera’s,
					paint brushes, computers, screwdrivers, hammers, harddisks and music instruments. Now I am here,
					designing and developing for you.
				</h2>
			</Section>
		</Container>
	);
};

export default ExcerptSection;
