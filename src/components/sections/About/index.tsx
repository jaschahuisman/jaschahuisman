import React from 'react';
import Container from '../../wrappers/Container';
import Section from '../../wrappers/Section';
import PortraitImg from '../../../assets/img/jascha-portrait.webp';

const AboutSection: React.FC = () => {
	return (
		<Container>
			<Section className='about-section' id='about'>
				<h2 className='section-title about-section__title'>For those who want to get to know me better</h2>
				<p className='about-section__paragraph'>
					At an early age I always longed to go back home during the holidays, because that’s where the computer
					was. I had the drive to create something every single day. Fortunately, the world is different now, and
					computers are portable. Along the road I gradually gained a full pallet of designing and developing
					expertise which I still use every day. The majority of people I have met refer to me as a digital wizard.
					I proudly call myself a creative developer.
				</p>
				<img className='about-section__image' alt='Portrait image' src={PortraitImg} />
			</Section>
		</Container>
	);
};

export default AboutSection;
