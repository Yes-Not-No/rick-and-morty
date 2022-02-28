import './episodeItem.scss';
import { Link } from 'react-router-dom';

function EpisodeItem({ episode }) {
	return (
		<li className="main-page__episodes-item">
			<Link to={'/episode/' + episode.id}>
				{episode.episode + ' ' + episode.name + ' (' + episode.air_date + ')'}
			</Link>
		</li>
	);
}

export { EpisodeItem };
