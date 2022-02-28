import React from 'react';
import './single-character.scss';
import { PageTitle } from '../../components/page-title/page-title.jsx';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUniqItems } from '../../utils/uniqItems';
import { EpisodeItem } from '../../components/episode-item/episodeItem';

function SingleCharacter() {
	const characters = useSelector(store => store.characters);
	const episodes = useSelector(store => store.episodes);
	const { id } = useParams();

	const thisCharacter = characters.data.find(item => {
		return item.id === +id;
	});

	const getEpisodesId = thisCharacter.episode.map(item => {
		return item.replace('https://rickandmortyapi.com/api/episode/', '');
	});

	const episodesIdUniq = selectUniqItems(getEpisodesId);

	const thisCharacterEpisodes = episodesIdUniq.map(id => {
		return episodes.data.find(item => {
			return item.id === +id;
		});
	});

	return (
		<main className="character-page">
			<PageTitle title={thisCharacter.name} />
			<section className="character-page__content-wrapper">
				<p>1 сезон</p>
				<ul className="episodes-list season-1">
					{thisCharacterEpisodes.map(item => {
						if (item.episode[2] === '1') {
							return <EpisodeItem episode={item} />;
						}
						return null;
					})}
				</ul>
				<p>2 сезон</p>
				<ul className="episodes-list season-2">
					{thisCharacterEpisodes.map(item => {
						if (item.episode[2] === '2') {
							return <EpisodeItem episode={item} />;
						}
						return null;
					})}
				</ul>
				<p>3 сезон</p>
				<ul className="episodes-list season-3">
					{thisCharacterEpisodes.map(item => {
						if (item.episode[2] === '3') {
							return <EpisodeItem episode={item} />;
						}
						return null;
					})}
				</ul>
				<p>4 сезон</p>
				<ul className="episodes-list season-4">
					{thisCharacterEpisodes.map(item => {
						if (item.episode[2] === '4') {
							return <EpisodeItem episode={item} />;
						}
						return null;
					})}
				</ul>
				<p>5 сезон</p>
				<ul className="episodes-list season-5">
					{thisCharacterEpisodes.map(item => {
						if (item.episode[2] === '5') {
							return <EpisodeItem episode={item} />;
						}
						return null;
					})}
				</ul>
			</section>
		</main>
	);
}

export { SingleCharacter };
