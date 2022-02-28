import './episodeItem.scss';
import { Link } from 'react-router-dom';

function EpisodeItem({ episode }) {
	return (
		<li className="main-page__episodes-item episodes-item">
			<Link className="episodes-item__link" to={'/episode/' + episode.id}>
				{episode.episode + ' ' + episode.name + ' (' + episode.air_date + ')'}
			</Link>
		</li>
	);
}

export { EpisodeItem };
