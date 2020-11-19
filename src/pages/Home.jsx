import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, LoadingPizzaBlock } from '../components';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortBy } from '../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
	{ name: 'популярности', type: 'rating', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавиту', type: 'name', order: 'asc' },
];

const Home = () => {
	const { isLoading, items, category, sortBy } = useSelector(({ pizzas, filters }) => ({
		isLoading: pizzas.isLoading,
		items: pizzas.items,
		category: filters.category,
		sortBy: filters.sortBy,
	}));
	const dispatch = useDispatch();

	const selectCategory = useCallback((index) => dispatch(setCategory(index)), [dispatch]);
	const selectSortBy = useCallback((sort) => dispatch(setSortBy(sort)), [dispatch]);

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
					? items.map((item) => <PizzaBlock key={item.id} {...item} />)
					: Array(8)
							.fill(null)
							.map((item, index) => <LoadingPizzaBlock key={index} />)}
			</div>
		</div>
	);
};

export default Home;
