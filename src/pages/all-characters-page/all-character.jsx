import React, { useState } from 'react';
import './all-character.scss';
import { PageTitle } from '../../components/page-title/page-title.jsx';
import { useSelector } from 'react-redux';
import { CharacterItem } from '../../components/character-item/characterItem';
import { Pagination } from '../../components/pagination/pagination';

function AllCharactersPage() {
	//Global state
	const characters = useSelector(store => store.characters);

	//Local state
	const [pageNumber, setPageNumber] = useState(1);

	//Function below return array of pagination items (based on all items in state)
	function createPaginationLinks() {
		const links = [];
		const pagiLinksCounter = Math.ceil(characters.data.length / 10);

		for (let i = 1; i <= pagiLinksCounter; i++) {
			links.push(i);
		}

		return links;
	}

	const pagiLinks = createPaginationLinks();

	return (
		<main className="all-characters-page">
			<PageTitle title="Полный список персонажей" />
			<Pagination links={pagiLinks} currentPage={pageNumber} pageSetter={setPageNumber} />
			<section className="all-characters-page__content-wrapper">
				<ul className="all-characters-page__content-list">
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

export { AllCharactersPage };
