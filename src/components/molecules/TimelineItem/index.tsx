import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ITimelineItemProps {
	date: string;
	title: string;
	description: string;
	image: string;
	index: number;
}

const TimelineItem: React.FC<ITimelineItemProps> = (props) => {
	const timelineItemRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from(timelineItemRef.current, {
			opacity: 0,
			y: '-20px',
			scrollTrigger: {
				trigger: timelineItemRef.current,
				start: 'top 50%',
				end: 'bottom 50%',
			},
		});
	}, []);

	return (
		<div
			className={`timeline-item ${props.index % 2 === 0 ? ' timeline-item--left' : ' timeline-item--right'}`}
			ref={timelineItemRef}
			role='listitem'
		>
			<div className='timeline-item__date'>{props.date}</div>
			<img
				className='timeline-item__image'
				src={props.image}
				alt={props.title}
				aria-label='Timeline item institute logo'
			/>
			<div className='timeline-item__content'>
				<h3 className='timeline-item__title'>{props.title}</h3>
				<p className='timeline-item__description'>{props.description}</p>
			</div>
		</div>
	);
};

export default TimelineItem;
