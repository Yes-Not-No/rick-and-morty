const initialState = {
	name: 'episodes',
	isLoading: true,
	data: [],
	filtered: []
};

function episodes(state = initialState, action) {
	switch (action.type) {
		case 'setEpisodes':
			return {
				...state,
				isLoading: false,
				data: [...state.data, ...action.payload]
			};
		case 'setFilteredEpisodes':
			return {
				...state,
				isLoading: false,
				filtered: [...action.payload]
			};
		default:
			return state;
	}
}

export { episodes };
