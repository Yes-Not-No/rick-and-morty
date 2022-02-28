import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.svg';
import './header.scss';

const navItemsInitialState = [
	{ title: 'Главная', path: '/', classes: ['navigation__link--current', 'navigation__link'] },
	{ title: 'Персонажи', path: '/characters', classes: ['navigation__link'] },
	{ title: 'Локации', path: '/locations', classes: ['navigation__link'] }
];

function Header() {
	const [navigation, setNavigation] = useState(navItemsInitialState);

	function setCurrent(e) {
		const linkHref = e.target.getAttribute('href');
		const newState = navigation.map(item => {
			if (item.classes[0] === 'navigation__link--current') {
				item.classes.shift();
			}
			if (item.path === linkHref) {
				item.classes.unshift('navigation__link--current');
			}
			return item;
		});

		setNavigation(newState);
	}

	return (
		<header className="header">
			<img className="header__logo" src={Logo} width="150" alt="Rick and Morty" />
			<nav className="header__navigation navigation">
				{navigation.map(item => {
					return (
						<Link
							className={item.classes.join(' ')}
							key={navigation.indexOf(item)}
							to={item.path}
							onClick={setCurrent}
						>
							{item.title}
						</Link>
					);
				})}
			</nav>
		</header>
	);
}

export { Header };
