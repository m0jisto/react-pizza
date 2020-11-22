export const addPizzaToCart = (pizzaCart) => ({
	type: 'ADD_PIZZA_TO_CART',
	payload: pizzaCart,
});

export const removePizzaToCart = (pizzaCart) => ({
	type: 'REMOVE_PIZZA_TO_CART',
	payload: pizzaCart,
});

export const plusCartItem = (item) => ({
	type: 'PLUS_CART_ITEM',
	payload: item,
});

export const minusCartItem = (item) => ({
	type: 'MINUS_CART_ITEM',
	payload: item,
});

export const rebootCart = () => ({
	type: 'REBOOT_CART',
});
