function setEpisodesAction(newState) {
	return {
		type: 'setEpisodes',
		payload: newState
	};
}

function setLocationsAction(newState) {
	return {
		type: 'setLocations',
		payload: newState
	};
}

function setCharactersAction(newState) {
	return {
		type: 'setCharacters',
		payload: newState
	};
}

export { setEpisodesAction, setCharactersAction, setLocationsAction };
