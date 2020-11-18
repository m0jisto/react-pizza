const initialState = {
	category: null,
	sortBy: {
		type: 'rating',
		order: 'desc',
	},
};

const filtersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SORT_BY_TYPE':
			return {
				...state,
				sortBy: {
					...state.sortBy,
					type: action.payload,
				},
			};
		case 'SET_SORT_BY_ORDER':
			return {
				...state,
				sortBy: {
					...state.sortBy,
					order: action.payload,
				},
			};
		case 'SET_CATEGORY':
			return {
				...state,
				category: action.payload,
			};
		default:
			return state;
	}
};

export default filtersReducer;
