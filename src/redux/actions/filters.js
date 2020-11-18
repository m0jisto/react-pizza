export const setSortByType = (type) => ({
	type: 'SET_SORT_BY_TYPE',
	payload: type,
});

export const setSortByOrder = (order) => ({
	type: 'SET_SORT_BY_ORDER',
	payload: order,
});

export const setCategory = (category) => ({
	type: 'SET_CATEGORY',
	payload: category,
});
