import React from 'react';
import { Link } from 'react-router-dom';

interface IProjectCardProps {
	title: string;
	category: string;
	description: string;
	link: string;
}

const ProjectCard: React.FC<IProjectCardProps> = (props) => {
	return (
		<div className='project-card' role='article'>
			<h3 className='project-card__title'>{props.title}</h3>
			<h4 className='project-card__category'>{props.category}</h4>
			<p className='project-card__description'>{props.description}</p>
			<Link to={props.link} className='project-card__link' role='link'>
				Continue reading{' '}
				<span className='material-icons-outlined' aria-label='Continue reading'>
					arrow_circle_right
				</span>
			</Link>
		</div>
	);
};

export default ProjectCard;
