import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';
import { fetchPizzas } from '../redux/actions/pizzas';
import { setCategory, setSortByType, setSortByOrder } from '../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
	{ name: 'популярности', type: 'rating' },
	{ name: 'цене', type: 'price' },
	{ name: 'алфавиту', type: 'name' },
];

const Home = () => {
	const { items, category, sortBy } = useSelector(({ pizzas, filters }) => ({
		items: pizzas.items,
		category: filters.category,
		sortBy: filters.sortBy,
	}));
	const dispatch = useDispatch();

	const selectCategory = useCallback((index) => dispatch(setCategory(index)), [dispatch]);
	const selectSortByType = useCallback((type) => dispatch(setSortByType(type)), [dispatch]);
	const selectSortByOrder = useCallback((order) => dispatch(setSortByOrder(order)), [dispatch]);

	useEffect(() => dispatch(fetchPizzas(category, sortBy)), [category, sortBy, dispatch]);

	return (
		<div className="container">
			<div className="content__top">
				<Categories onClickItem={selectCategory} items={categoryNames} />
				<SortPopup
					onClickType={selectSortByType}
					order={sortBy.order}
					onClickOrder={selectSortByOrder}
					items={sortNames}
				/>
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">{items && items.map((item) => <PizzaBlock key={item.id} {...item} />)}</div>
		</div>
	);
};

export default Home;
