import React, { useState } from 'react';
import './main.scss';
import { PageTitle } from '../../components/page-title/page-title.jsx';
import { useSelector } from 'react-redux';
import { EpisodeItem } from '../../components/episode-item/episodeItem';
import { setFilteredAction } from '../../redux/actions';
import { useDispatch } from 'react-redux';

function Main() {
	const state = useSelector(state => state.episodes);
	const dispatch = useDispatch();
	const [season, setSeason] = useState('1');

	const pageTitle = season !== 'All' ? 'Список эпизодов ' + season + ' сезона' : 'Полный список эпизодов';

	const loading = <div>Loading...</div>;

	const stateRender = () => {
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

	const filterRender = () => {
		return (
			<ul className="main-page__episodes-list episodes-list">
				{state.filtered.map(item => {
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

	const loadedContent = () => {
		if (state.filtered.length !== 0 && document.getElementById('search').value.length !== 0) {
			return filterRender();
		}
		if (document.getElementById('search').value.length === 0) {
			return stateRender();
		}
		return filterRender();
	};

	function serachHandler() {
		const filteredItems = state.data.filter(item => {
			return item.name.includes(document.getElementById('search').value);
		});
		dispatch(setFilteredAction(filteredItems));
	}

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
			<input
				id="search"
				type="search"
				// style={{ display: season === 'All' ? 'inline' : 'none' }}
				onChange={serachHandler}
			/>
			<section className="main-page__content-wrapper">
				{state.isLoading === false ? loadedContent() : loading}
			</section>
		</main>
	);
}

export { Main };
