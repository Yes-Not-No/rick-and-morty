import './characterItem.scss';
import { Link } from 'react-router-dom';

function CharacterItem({ id, img, name, origin, location }) {
	return (
		<li key={id} className="character-item">
			<Link className="character-item__link-wrapper" to={'/characters/' + id}>
				<img className="character-item__image" width="150" src={img} alt="" />
				<span className="character-item__name">
					{name} from <span className="character-item__origin">{origin}</span>
				</span>
				<span className="character-item__location">Location: {location}</span>
			</Link>
		</li>
	);
}

export { CharacterItem };
