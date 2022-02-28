import React, { useState } from 'react';
import './main.scss';
import { PageTitle } from '../../components/page-title/page-title.jsx';
import { useSelector } from 'react-redux';
import { EpisodeItem } from '../../components/episode-item/episodeItem';

function Main() {
	const state = useSelector(state => state.episodes);
	const [season, setSeason] = useState('1');

	const pageTitle = season !== 'All' ? 'Список эпизодов ' + season + ' сезона' : 'Полный список эпизодов';

	const loading = <div>Loading...</div>;

	const loadedContent = () => {
		return (
			<ul className="main-page__episodes-list episodes-list">
				{state.data.map(item => {
					if (season === 'All') {
						return <EpisodeItem episode={item} />;
					}
					if (item.episode[2] === season) {
						return <EpisodeItem episode={item} />;
					}

					return null;
				})}
			</ul>
		);
	};
	console.log(state);
	return (
		<main className="main-page">
			<PageTitle title={pageTitle} />
			<p>Выберите сезон</p>
			<select
				name="seasons"
				id="seasons"
				onChange={() => {
					setSeason(document.querySelector('#seasons').value);
				}}
			>
				<option value="All">Все сезоны</option>
				<option value="1" selected>
					1
				</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
			<section className="main-page__content-wrapper">
				{state.isLoading === false ? loadedContent() : loading}
			</section>
		</main>
	);
}

export { Main };
