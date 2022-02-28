import './App.scss';
import React, { useEffect } from 'react';
import { Locations } from './pages/locations/locations.jsx';
import { Main } from './pages/main/main.jsx';
import { EpisodePage } from './pages/episode-page/episode.jsx';
import { CharacterPage } from './pages/character-page/character.jsx';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header.jsx';
import { Footer } from './components/footer/footer.jsx';
import { fetchData } from './data/fetchData.js';
import { setEpisodesAction, setCharactersAction, setLocationsAction } from './redux/actions/index.js';
import { useDispatch } from 'react-redux';
import { Characters } from './pages/all-characters-page/character';

function App() {
	const dispatch = useDispatch();

	function dispatchFetchedEpisodes(url) {
		let nextPage;
		fetchData(url)
			.then(data => {
				nextPage = data.info.next;
				dispatch(setEpisodesAction(data.results));
				return nextPage;
			})
			.then(nextPage => {
				if (nextPage !== null) {
					dispatchFetchedEpisodes(nextPage);
				} else {
					return;
				}
			});
	}

	function dispatchFetchedCharacters(url) {
		let nextPage;
		fetchData(url)
			.then(data => {
				nextPage = data.info.next;
				dispatch(setCharactersAction(data.results)); //----
				return nextPage;
			})
			.then(nextPage => {
				if (nextPage !== null) {
					dispatchFetchedCharacters(nextPage); //----
				} else {
					return;
				}
			});
	}

	function dispatchFetchedLocations(url) {
		let nextPage;
		fetchData(url)
			.then(data => {
				nextPage = data.info.next;
				dispatch(setLocationsAction(data.results)); //----
				return nextPage;
			})
			.then(nextPage => {
				if (nextPage !== null) {
					dispatchFetchedLocations(nextPage); //----
				} else {
					return;
				}
			});
	}

	useEffect(() => {
		dispatchFetchedEpisodes('https://rickandmortyapi.com/api/episode?page=1');
		dispatchFetchedCharacters('https://rickandmortyapi.com/api/character?page=1');
		dispatchFetchedLocations('https://rickandmortyapi.com/api/location?page=1');
	}, []);

	return (
		<div className="container">
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/episode/:id" element={<EpisodePage />} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/characters/:id" element={<CharacterPage />} />
				<Route path="/locations" element={<Locations />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
