import { combineReducers } from 'redux';
import { episodes } from './episodes.js';
import { characters } from './characters.js';
import { locations } from './locations.js';

const rootReducer = combineReducers({
	episodes: episodes,
	characters: characters,
	locations: locations
});

export { rootReducer };
