const initialState = {
	items: [],
	totalPrice: 0,
	totalCount: 0,
};

const findIndexCart = (items, action) =>
	items.findIndex(
		({ id, size, types }) =>
			id === action.payload.id && size === action.payload.size && types === action.payload.types,
	);

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_PIZZA_TO_CART': {
			const indexRepeat = findIndexCart(state.items, action);

			const totalPrice = state.totalPrice + action.payload.price;
			const totalCount = state.totalCount + 1;

			if (indexRepeat >= 0)
				return {
					...state,
					totalPrice,
					totalCount,
					items: [
						...state.items.slice(0, indexRepeat),
						{
							...state.items[indexRepeat],
							quantity: state.items[indexRepeat].quantity + 1,
						},
						...state.items.slice(indexRepeat + 1),
					],
				};

			return {
				...state,
				totalPrice,
				totalCount,
				items: [
					...state.items,
					{
						...action.payload,
						quantity: 1,
					},
				],
			};
		}
		case 'REMOVE_PIZZA_TO_CART': {
			const indexCart = findIndexCart(state.items, action);
			const totalPrice = state.totalPrice - state.items[indexCart].quantity * state.items[indexCart].price;
			const totalCount = state.totalCount - state.items[indexCart].quantity;

			return {
				...state,
				totalPrice,
				totalCount,
				items: [...state.items.slice(0, indexCart), ...state.items.slice(indexCart + 1)],
			};
		}
		case 'PLUS_CART_ITEM': {
			const indexCart = findIndexCart(state.items, action);
			const totalPrice = state.totalPrice + state.items[indexCart].price;
			const totalCount = state.totalCount + 1;

			return {
				...state,
				totalPrice,
				totalCount,
				items: [
					...state.items.slice(0, indexCart),
					{
						...state.items[indexCart],
						quantity: state.items[indexCart].quantity + 1,
					},
					...state.items.slice(indexCart + 1),
				],
			};
		}
		case 'MINUS_CART_ITEM': {
			const indexCart = findIndexCart(state.items, action);
			const quantityItem = state.items[indexCart].quantity;

			if (quantityItem === 1) return state;

			const totalPrice = state.totalPrice - state.items[indexCart].price;
			const totalCount = state.totalCount - 1;

			return {
				...state,
				totalPrice,
				totalCount,
				items: [
					...state.items.slice(0, indexCart),
					{
						...state.items[indexCart],
						quantity: state.items[indexCart].quantity - 1,
					},
					...state.items.slice(indexCart + 1),
				],
			};
		}
		case 'REBOOT_CART':
			return {
				items: [],
				totalPrice: 0,
				totalCount: 0,
			};
		default:
			return state;
	}
};

export default cartReducer;
