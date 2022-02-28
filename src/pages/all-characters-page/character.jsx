import React, { useState, useEffect } from 'react';
import './character.scss';
import { PageTitle } from '../../components/page-title/page-title.jsx';
import { useSelector } from 'react-redux';
import { CharacterItem } from '../../components/character-item/characterItem';

function Characters() {
	const characters = useSelector(store => store.characters);

	const [pageNumber, setPageNumber] = useState(1);

	useEffect(() => {
		document.querySelector('.pagination-item').classList.add('pagination-item__current');
	}, []);

	function createPaginationLinks() {
		const links = [];
		const pagiLinksCounter = Math.ceil(characters.data.length / 10);

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
			<PageTitle title="Полный список персонажей" />
			<div className="pagination">
				{pagiLinks.map(item => {
					if (pageNumber === 1 && item < 7) {
						return (
							<a
								className="pagination-item"
								href="#"
								style={{ marginRight: 20 }}
								onClick={paginationHandler}
							>
								{item}
							</a>
						);
					}
					if (item >= pageNumber - 1 && item < pageNumber + 5) {
						return (
							<a
								className="pagination-item"
								href="#"
								style={{ marginRight: 20 }}
								onClick={paginationHandler}
							>
								{item}
							</a>
						);
					}
					return null;
				})}
			</div>
			<section className="episode-page__content-wrapper">
				<ul className="episode-page__content-list">
					{characters.data.map(item => {
						const index = characters.data.indexOf(item);
						const startNumber = (pageNumber - 1) * 10;
						if (index >= startNumber && index < startNumber + 10) {
							return (
								<CharacterItem
									id={item.id}
									img={item.image}
									name={item.name}
									origin={item.origin.name}
									location={item.location.name}
								/>
							);
						}
						return null;
					})}
				</ul>
			</section>
		</main>
	);
}

export { Characters };
