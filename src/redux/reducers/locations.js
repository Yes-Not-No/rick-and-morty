const initialState = {
	name: 'locations',
	isLoading: true,
	data: []
};

function locations(state = initialState, action) {
	switch (action.type) {
		case 'setLocations':
			return {
				...state,
				isLoading: false,
				data: [...state.data, ...action.payload]
			};
		default:
			return state;
	}
}

export { locations };
