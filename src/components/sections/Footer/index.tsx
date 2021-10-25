import React from 'react';
import { animateScroll } from 'react-scroll';
import Container from '../../wrappers/Container';
import Section from '../../wrappers/Section';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaBehance } from 'react-icons/fa';
import Button from '../../atoms/Button';

const Footer: React.FC = () => {
	const scrollToTop = () => {
		animateScroll.scrollToTop();
	};

	return (
		<Section animateIn={false}>
			<footer className='footer'>
				<Container maxWidth='1200px'>
					<div onClick={scrollToTop} className='footer__scrolltop'>
						Scroll back to the top <span className='material-icons-outlined'>arrow_circle_up</span>
					</div>
					<div className='footer__sections' role='list'>
						<div className='footer__section' role='listitem'>
							<h2 className='footer__section__title'>Interested in my work?</h2>
							<p>Did I make you curious about my work? View my complete portfolio and follow my work!</p>
							<Button
								size='small'
								variant='primary'
								icon={<FaBehance />}
								href='https://www.behance.net/jaschahuisman'
								target='_blank'
								rel='noopener noreferrer'
								title='Behance portfolio'
							>
								My portfolio
							</Button>
						</div>
						<div className='footer__section' role='listitem'>
							<h2 className='footer__section__title'>I&apos;m an open book.</h2>
							<p>
								I like to open source most of my projects, so that everyone can learn something from my projects.
							</p>
							<Button
								size='small'
								icon={<FaGithub />}
								href='https://www.github.com/jaschahuisman/my-story'
								target='_blank'
								rel='noopener noreferrer'
								title='GitHub repository'
							>
								View repository
							</Button>
						</div>
						<div className='footer__section' role='listitem'>
							<h2 className='footer__section__title'>Let&apos;s connect.</h2>
							<p>
								Give me a call, or even a text message will work. Then we we&apos;ll talk about what we can do for
								each other.
							</p>
							<ul className='footer__section__social-icons'>
								<li className='footer__section__social-icons__icon'>
									<a
										href='https://www.linkedin.com/in/jaschahuisman/'
										target='_blank'
										rel='noopener noreferrer'
										aria-label='LinkedIn'
										role='link'
									>
										<FaLinkedin fill='#2867B2' />
									</a>
								</li>
								<li className='footer__section__social-icons__icon'>
									<a
										href='https://wa.me/+31611808827?text=Hi%20Jascha!&lang=en'
										target='_blank'
										rel='noopener noreferrer'
										aria-label='WhatsApp'
										role='link'
									>
										<FaWhatsapp fill='#4AC959' />
									</a>
								</li>
								<li className='footer__section__social-icons__icon'>
									<a
										href='https://www.instagram.com/jaschahuisman'
										target='_blank'
										rel='noopener noreferrer'
										aria-label='Instagram'
										role='link'
									>
										<FaInstagram fill='#E1306C' />
									</a>
								</li>
								<li className='footer__section__social-icons__icon'>
									<a
										href='https://www.github.com/jaschahuisman'
										target='_blank'
										rel='noopener noreferrer'
										aria-label='GitHub'
										role='link'
									>
										<FaGithub />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</Container>
			</footer>
		</Section>
	);
};

export default Footer;
