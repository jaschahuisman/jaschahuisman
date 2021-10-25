import React from 'react';

interface IContainerProps {
	maxWidth?: string;
}

const Container: React.FC<IContainerProps> = (props) => {
	return (
		<div className='container' style={{ maxWidth: props.maxWidth }}>
			{props.children}
		</div>
	);
};

export default Container;
