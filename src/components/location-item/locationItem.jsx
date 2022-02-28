import './locationItem.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// created: "2017-11-10T13:06:38.182Z"

// dimension: "unknown"

// id: 2

// name: "Abadango"

// residents: ["https://rickandmortyapi.com/api/character/6"] (1)

// type: "Cluster"

// url: "https://rickandmortyapi.com/api/location/2"

function LocationItem({ location }) {
	const characters = useSelector(state => state.characters);

	const residentsId = location.residents.map(item => {
		return item.replace('https://rickandmortyapi.com/api/character/', '');
	});

	const residents = residentsId.map(id => {
		return characters.data.find(item => {
			return item.id === +id;
		});
	});

	return (
		<li className="location-item">
			<Link className="location-item__link" key={location.id} to={'/location/' + location.id}>
				{location.name}
			</Link>
		</li>
	);
}

export { LocationItem };
