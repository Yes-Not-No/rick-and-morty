import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.svg';
import './header.scss';

const navItems = [
	{ title: 'Главная', path: '/' },
	{ title: 'Персонажи', path: '/characters' },
	{ title: 'Локации', path: '/locations' }
];

function Header() {
	return (
		<header className="header">
			<img src={Logo} width="150" alt="Rick and Morty" />
			<nav className="header__navigation">
				{navItems.map(item => {
					return (
						<Link key={navItems.indexOf(item)} to={item.path}>
							{item.title}
						</Link>
					);
				})}
			</nav>
		</header>
	);
}

export { Header };
