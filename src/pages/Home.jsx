import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, LoadingPizzaBlock } from '../components';
import { fetchPizzas, setCategory, setSortBy, addPizzaToCart } from '../redux/actions';

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
	{ name: 'популярности', type: 'rating', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
	const { isLoading, pizzasItems, category, sortBy, cartItems } = useSelector(({ pizzas, filters, cart }) => ({
		isLoading: pizzas.isLoading,
		pizzasItems: pizzas.items,
		category: filters.category,
		sortBy: filters.sortBy,
		cartItems: cart.items,
	}));
	const dispatch = useDispatch();

	const selectCategory = useCallback((index) => dispatch(setCategory(index)), [dispatch]);
	const selectSortBy = useCallback((sort) => dispatch(setSortBy(sort)), [dispatch]);
	const handleAddPizzaToCart = useCallback((pizza) => dispatch(addPizzaToCart(pizza)), [dispatch]);

	useEffect(() => dispatch(fetchPizzas(category, sortBy)), [category, sortBy, dispatch]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories items={categoryNames} activeCategory={category} onClickCategory={selectCategory} />
				<SortPopup items={sortNames} activeType={sortBy.type} onClickType={selectSortBy} />
			</div>
			<h2 className="content__title">{category !== null ? categoryNames[category] : 'Все пиццы'}</h2>
			<div className="content__items">
				{isLoading
					? pizzasItems.map((item) => (
							<PizzaBlock
								{...item}
								key={item.id}
								onClickPizzaCart={handleAddPizzaToCart}
								addedCount={
									cartItems &&
									cartItems.reduce(
										(accum, elem) => (item.id === elem.id ? accum + elem.quantity : accum),
										0,
									)
								}
							/>
					  ))
					: Array(8)
							.fill(null)
							.map((_, index) => <LoadingPizzaBlock key={index} />)}
			</div>
		</div>
	);
};

export default Home;
