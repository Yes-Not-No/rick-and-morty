import React from 'react';
import './episode.scss';
import { PageTitle } from '../../components/page-title/page-title.jsx';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectUniqItems } from '../../utils/uniqItems';
import { CharacterItem } from '../../components/character-item/characterItem';

function EpisodePage() {
	const episodes = useSelector(store => store.episodes);
	const characters = useSelector(store => store.characters);
	const { id } = useParams();

	const thisEpisode = episodes.data.find(item => {
		return item.id === +id;
	});

	console.log(thisEpisode);

	const getCharactersId = thisEpisode.characters.map(item => {
		return item.replace('https://rickandmortyapi.com/api/character/', '');
	});

	const charactersIdUniq = selectUniqItems(getCharactersId);

	const thisEpisodeCharacters = charactersIdUniq.map(id => {
		return characters.data.find(item => {
			return item.id === +id;
		});
	});

	// created: "2017-12-29T18:07:17.610Z"
	// episode: ["https://rickandmortyapi.com/api/episode/1", "https://rickandmortyapi.com/api/episode/2", "https://rickandmortyapi.com/api/episode/3", "https://rickandmortyapi.com/api/episode/4", "https://rickandmortyapi.com/api/episode/5", "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/22"] (7)
	// gender: "Male"
	// id: 175
	// image: "https://rickandmortyapi.com/api/character/avatar/175.jpeg"
	// location: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"}
	// name: "Jerry Smith"
	// origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"}
	// species: "Human"
	// status: "Alive"
	// type: ""
	// url: "https://rickandmortyapi.com/api/character/175"

	return (
		<main className="episode-page">
			<PageTitle title={thisEpisode.episode + ' ' + thisEpisode.name} />
			<section className="episode-page__content-wrapper">
				<ul className="episode-page__content-list">
					{thisEpisodeCharacters.map(item => {
						return (
							<CharacterItem
								id={item.id}
								img={item.image}
								name={item.name}
								origin={item.origin.name}
								location={item.location.name}
							/>
						);
					})}
				</ul>
			</section>
		</main>
	);
}

export { EpisodePage };
