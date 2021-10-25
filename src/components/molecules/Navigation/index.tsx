import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Container from '../../wrappers/Container';

const Navigation: React.FC = () => {
	const redirectFromOtherPage = (sectionId: string, path: string) => {
		if (window.location.pathname !== `${path}`) {
			console.log(window.location);
			window.location.replace(`/#${sectionId}`);
		}
	};

	return (
		<Container>
			<nav className='navigation' role='navigation'>
				<NavLink to='/'>
					<span className='navigation__logo'>Jascha Huisman</span>
				</NavLink>
				<menu className='navigation__menu' role='menu'>
					<Link
						smooth={true}
						className='navigation__menu__item'
						to='about'
						onClick={() => {
							redirectFromOtherPage('about', '/');
						}}
						role='menuitem'
					>
						About
					</Link>
					{/* <Link
						smooth={true}
						className='navigation__menu__item'
						to='projects'
						onClick={() => {
							redirectFromOtherPage('projects', '/');
						}}
						role='menuitem'
					>
						Projects
					</Link> */}
					<Link
						smooth={true}
						className='navigation__menu__item'
						to='contact'
						onClick={() => {
							redirectFromOtherPage('contact', '/');
						}}
						role='menuitem'
					>
						Contact
					</Link>
				</menu>
			</nav>
		</Container>
	);
};

export default Navigation;
