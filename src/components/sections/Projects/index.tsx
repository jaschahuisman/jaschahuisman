import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ProjectCard from '../../molecules/ProjectCard';
import Container from '../../wrappers/Container';
import Section from '../../wrappers/Section';

const projects = [
	{
		id: 0,
		title: 'Twindle',
		category: 'Development',
		description:
			'Twindle is a social media platform that allows users to create and share short stories. Users can also follow other users and see their stories.',
		link: '/projects/twindle',
		image: 'https://source.unsplash.com/random/600x500',
	},
	{
		id: 1,
		title: 'Scriptorium',
		category: 'Development',
		description:
			'Scriptorium is a web application that allows users to create and share short stories. Users can also follow other users and see their stories.',
		link: '/projects/scriptorium',
		image: 'https://source.unsplash.com/random/600x400',
	},
];

const ProjectsSection: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [scrollProgress, setScrollProgress] = useState(0);

	React.useEffect(() => {
		const projectCount = projects.length;
		const newActiveIndex = Math.floor(scrollProgress * projectCount);
		if (newActiveIndex < projectCount) {
			setActiveIndex(newActiveIndex);
		}
	}, [scrollProgress]);

	return (
		<Container>
			<Section setScrollProgress={setScrollProgress} pin={true} className='projects-section' id='projects'>
				<h2 className='section-title projects-section__title'>Projects that deserve a spotlight</h2>
				<div className='projects-section__container'>
					<div className='projects-section__info' role='group'>
						<SwitchTransition mode='out-in'>
							<CSSTransition
								key={activeIndex}
								addEndListener={(node, done) => {
									node.addEventListener('transitionend', done, false);
								}}
								timeout={1000}
								classNames='info-animation'
							>
								<ProjectCard
									key={projects[activeIndex].id}
									title={projects[activeIndex].title}
									category={projects[activeIndex].category}
									description={projects[activeIndex].description}
									link={projects[activeIndex].link}
								/>
							</CSSTransition>
						</SwitchTransition>
						<span
							style={{ width: `${scrollProgress * 100}%` }}
							className='projects-section__indicator'
							role='progressbar'
						/>
					</div>
					<div className='projects-section__carousel' role='slider'>
						{projects.map((project) => (
							<img
								key={project.id}
								src={project.image}
								className={`carousel__image ${project.id < activeIndex ? 'carousel__image--folded' : ''}`}
							/>
						))}
					</div>
				</div>
			</Section>
		</Container>
	);
};

export default ProjectsSection;
