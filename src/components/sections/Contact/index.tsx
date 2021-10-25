import React from 'react';
import BusinessCard from '../../molecules/BusinessCard';
import Container from '../../wrappers/Container';
import Section from '../../wrappers/Section';

const ContactSection: React.FC = () => {
	return (
		<Container>
			<Section className='contact-section' id='contact'>
				<h2 className='section-title contact-section__title'>Feel free to reach out</h2>
				<BusinessCard />
			</Section>
		</Container>
	);
};

export default ContactSection;
