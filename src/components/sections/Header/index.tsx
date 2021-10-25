import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import Container from '../../wrappers/Container';
import Section from '../../wrappers/Section';
import BannerImg from '../../../assets/img/jascha-banner.webp';

const HeaderSection: React.FC = () => {
	const headerImgRef = useRef<HTMLDivElement>(null);
	const headerTextRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(headerImgRef.current, {
			opacity: 0,
			right: '-20px',
			scrollTrigger: {
				trigger: headerImgRef.current,
				scrub: true,
				start: 'top top',
				end: 'bottom 30px',
			},
		});
		gsap.to(headerTextRef.current, {
			opacity: 0,
			left: '20px',
			scrollTrigger: {
				trigger: headerImgRef.current,
				scrub: true,
				start: 'top top',
				end: 'bottom 30px',
				snap: 1,
			},
		});
	}, []);

	return (
		<Container>
			<Section>
				<header className='header' role='banner'>
					<h1 className='header__title' ref={headerTextRef}>
						Design & development <br /> intertwined
					</h1>
					<div className='header__image-wrapper' ref={headerImgRef}>
						<img className='header__image' src={BannerImg} alt='header-image' />
					</div>
				</header>
			</Section>
		</Container>
	);
};

export default HeaderSection;
