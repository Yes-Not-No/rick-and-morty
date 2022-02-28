import React from 'react';
import './footer.scss';
import Logo from '../../assets/img/Logo.svg';

function Footer() {
	return (
		<footer className="footer">
			<img src={Logo} width="150" alt="Rick and Morty" />
		</footer>
	);
}

export { Footer };
