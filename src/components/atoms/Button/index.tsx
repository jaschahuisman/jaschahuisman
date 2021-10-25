import React, { ReactChild } from 'react';

interface IButtonInterface extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	variant?: 'primary' | 'secondary';
	size?: 'small' | 'normal';
	icon?: ReactChild;
}

const Button: React.FC<IButtonInterface> = ({ variant = 'secondary', size = 'small', icon, ...props }) => {
	const className = `button button--${variant} button--${size} ${props.className}`;
	return (
		<a {...props} className={className} role='button'>
			{icon && <span className='button__icon'>{icon}</span>}
			{props.children}
		</a>
	);
};

export default Button;
