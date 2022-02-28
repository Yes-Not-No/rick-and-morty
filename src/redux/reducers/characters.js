const initialState = {
	name: 'characters',
	isLoading: true,
	data: []
};

function characters(state = initialState, action) {
	switch (action.type) {
		case 'setCharacters':
			return {
				...state,
				isLoading: false,
				data: [...state.data, ...action.payload]
			};
		default:
			return state;
	}
}

export { characters };
