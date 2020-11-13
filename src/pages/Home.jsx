import React from 'react';

import { Categories, SortPopup, PizzaBlock } from '../components';

const Home = ({ items }) => (
	<div className="container">
		<div className="content__top">
			<Categories
				items={['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
			/>
			<SortPopup items={['популярности', 'цене', 'алфавиту']} />
		</div>
		<h2 className="content__title">Все пиццы</h2>
		<div className="content__items">
			{items.map((item) => (
				<PizzaBlock key={item.id} {...item} />
			))}
		</div>
	</div>
);

export default Home;
