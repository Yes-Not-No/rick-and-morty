import './App.scss';
import React, { useEffect } from 'react';
import { AllLocationsPage } from './pages/all-locations-page/all-locations.jsx';
import { Main } from './pages/main/main.jsx';
import { SingleEpisode } from './pages/single-episode-page/single-episode.jsx';
import { SingleCharacter } from './pages/single-character-page/single-character.jsx';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header.jsx';
import { Footer } from './components/footer/footer.jsx';
import { fetchData } from './data/fetchData.js';
import { setEpisodesAction, setCharactersAction, setLocationsAction } from './redux/actions/index.js';
import { useDispatch } from 'react-redux';
import { AllCharactersPage } from './pages/all-characters-page/all-character';

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

	//Dispatching data from server to redux store
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
				<Route path="/episode/:id" element={<SingleEpisode />} />
				<Route path="/characters" element={<AllCharactersPage />} />
				<Route path="/characters/:id" element={<SingleCharacter />} />
				<Route path="/locations" element={<AllLocationsPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
