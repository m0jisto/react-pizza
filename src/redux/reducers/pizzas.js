const initialState = {
	pizzas: [],
	isLoaded: false,
	isError: false,
};

const pizzasReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_PIZZAS':
			return {
				...state,
				items: action.payload,
			};
		case 'SET_LOADING':
			return {
				...state,
				isLoaded: action.payload,
			};
		case 'SET_ERROR':
			return {
				...state,
				isError: action.payload,
			};
		default:
			return state;
	}
};

export default pizzasReducer;
