import React from 'react';
import Helmet from 'react-helmet';
import HeaderSection from '../../sections/Header';
import ExcerptSection from '../../sections/Excerpt';
import AboutSection from '../../sections/About';
import TimelineSection from '../../sections/Timeline';
import ContactSection from '../../sections/Contact';
// import ProjectsSection from '../../sections/Projects';
import PortraitImg from '../../../assets/img/jascha-portrait.jpeg';

const HomePage: React.FC = () => {
	return (
		<React.Fragment>
			<Helmet>
				<meta property='og:image' content={`http://www.jaschahuisman.nl${PortraitImg}`} />
			</Helmet>
			<HeaderSection />
			<ExcerptSection />
			<AboutSection />
			{/* <ProjectsSection /> */}
			<TimelineSection />
			<ContactSection />
		</React.Fragment>
	);
};

export default HomePage;
