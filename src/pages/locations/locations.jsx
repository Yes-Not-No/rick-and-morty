import React, { useState, useEffect } from 'react';
import './locations.scss';
import { PageTitle } from '../../components/page-title/page-title.jsx';
import { useSelector } from 'react-redux';
import { CharacterItem } from '../../components/character-item/characterItem';

function Locations() {
	const locations = useSelector(state => state.locations);
	console.log(locations);
	const [pageNumber, setPageNumber] = useState(1);

	useEffect(() => {
		document.querySelector('.pagination-item').classList.add('pagination-item__current');
	}, []);

	function createPaginationLinks() {
		const links = [];
		const pagiLinksCounter = Math.ceil(locations.data.length / 10);

		for (let i = 1; i <= pagiLinksCounter; i++) {
			links.push(i);
		}

		return links;
	}

	function paginationHandler(e) {
		e.preventDefault();
		const page = Number(e.target.innerText);
		setPageNumber(page);
		document.querySelectorAll('.pagination-item').forEach(item => {
			item.classList.remove('pagination-item__current');
		});
		e.target.classList.add('pagination-item__current');
	}

	const pagiLinks = createPaginationLinks();

	return (
		<main className="character-page">
			<PageTitle title="All Characters" />
			{pagiLinks.map(item => {
				if (pageNumber === 1 && item < 7) {
					return (
						<a className="pagination-item" href="#" style={{ marginRight: 20 }} onClick={paginationHandler}>
							{item}
						</a>
					);
				}
				if (item >= pageNumber - 1 && item < pageNumber + 5) {
					return (
						<a className="pagination-item" href="#" style={{ marginRight: 20 }} onClick={paginationHandler}>
							{item}
						</a>
					);
				}
				return null;
			})}
			<section className="episode-page__content-wrapper">
				<ul className="episode-page__content-list">
					{locations.data.map(item => {
						const index = locations.data.indexOf(item);
						const startNumber = (pageNumber - 1) * 10;
						if (index >= startNumber && index < startNumber + 10) {
							return <CharacterItem id={item.id} name={item.name} />;
						}
						return null;
					})}
				</ul>
			</section>
		</main>
	);
}

export { Locations };
