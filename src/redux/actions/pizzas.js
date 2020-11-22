import axios from 'axios';

export const setLoading = (statusLoading) => ({
	type: 'SET_LOADING',
	payload: statusLoading,
});

export const setPizzas = (items) => ({
	type: 'SET_PIZZAS',
	payload: items,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
	dispatch(setLoading(false));

	axios
		.get(`/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
		.then(({ data }) => {
			dispatch(setPizzas(data));
			dispatch(setLoading(true));
		});
};
