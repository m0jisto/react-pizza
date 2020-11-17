import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filter'

const categoryNames = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
	{ name: 'популярности', type: 'popular' },
	{ name: 'цене', type: 'price' },
	{ name: 'алфавиту', type: 'alphabet' },
];

const Home = () => {
	const { items, sortBy } = useSelector(({ pizzas, filters }) => ({
		items: pizzas.items,
		sortBy: filters.sortBy,
	});
	const dispatch = useDispatch();
	
	const selectCategory = useCallback((index) => dispatch(setCategory(index)), []);
	
	return (
		<div className="container">
			<div className="content__top">
				<Categories
					onClickItem={selectCategory}
					items={categoryNames}
				/>
				<SortPopup items={sortNames} />
			</div>
			<h2 className="content__title">Все пиццы</h2>
			<div className="content__items">
				{items && items.map((item) => <PizzaBlock key={item.id} {...item} />);}
			</div>
		</div>
	);
}

export default Home;
