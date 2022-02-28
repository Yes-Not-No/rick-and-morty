import React, { useState } from 'react';
import './all-locations.scss';
import { PageTitle } from '../../components/page-title/page-title.jsx';
import { useSelector } from 'react-redux';
import { LocationItem } from '../../components/location-item/locationItem';
import { Pagination } from '../../components/pagination/pagination';

function AllLocationsPage() {
	//Global state
	const locations = useSelector(state => state.locations);

	//Local state
	const [pageNumber, setPageNumber] = useState(1);

	//Function below return array of pagination items (based on all items in state)
	function createPaginationLinks() {
		const links = [];
		const pagiLinksCounter = Math.ceil(locations.data.length / 10);

		for (let i = 1; i <= pagiLinksCounter; i++) {
			links.push(i);
		}

		return links;
	}

	const pagiLinks = createPaginationLinks();

	return (
		<main className="all-locations-page">
			<PageTitle title="All Locations" />
			<Pagination links={pagiLinks} currentPage={pageNumber} pageSetter={setPageNumber} />
			<section className="all-locations-page__content-wrapper">
				<ul className="all-locations-page__content-list">
					{locations.data.map(item => {
						const index = locations.data.indexOf(item);
						const startNumber = (pageNumber - 1) * 10;
						if (index >= startNumber && index < startNumber + 10) {
							return <LocationItem id={item.id} location={item} />;
						}
						return null;
					})}
				</ul>
			</section>
		</main>
	);
}

export { AllLocationsPage };
