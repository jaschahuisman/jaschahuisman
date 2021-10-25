import React from 'react';
import PortraitPicture from '../../../assets/img/jascha-portrait.webp';

const BusinessCard: React.FC = () => {
	return (
		<div className='business-card' role='group'>
			<img src={PortraitPicture} alt='Profile picture' className='business-card__image' />
			<div>
				<h3 className='business-card__title'>Jascha Huisman</h3>
				<h4 className='business-card__subtitle'>Creative developer</h4>
				<ul className='business-card__list' role='list'>
					<li className='business-card__list__item' role='listitem'>
						<a href='tel:+31-06-11808827'>
							<span className='material-icons-outlined'>call</span>+31 6 11808827
						</a>
					</li>
					<li className='business-card__list__item' role='listitem'>
						<a href='mailto:info@jaschahuisman.nl'>
							<span className='material-icons-outlined'>alternate_email</span>info@jaschahuisman.nl
						</a>
					</li>
					<li className='business-card__list__item' role='listitem'>
						<span className='material-icons-outlined'>location_city</span>Dordrecht, the Netherlands
					</li>
				</ul>
			</div>
		</div>
	);
};

export default BusinessCard;
