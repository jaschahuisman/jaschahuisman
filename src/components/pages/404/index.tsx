import React from 'react';
import Button from '../../atoms/Button';
import Container from '../../wrappers/Container';
import Section from '../../wrappers/Section';

const NotFound: React.FC = () => {
	return (
		<Container>
			<Section className='notfound'>
				<h1 className='notfound__title'>My page transfer gnomes couldn&apos;t find what you were looking for.</h1>
				<Button href='/'>Take me back on track</Button>
			</Section>
		</Container>
	);
};

export default NotFound;
