import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import store from './redux/store';
import { setPizzas } from './redux/actions/pizzas';

import { Home, Cart } from './pages';
import { Header } from './components';

import './styles/index.scss';

const App = () => {
	const { items, sortBy } = useSelector(({ pizzas, filters }) => ({
		items: pizzas.items,
		sortBy: filters.sortBy,
	});
	const dispatch = useDispatch();
	
	useEffect(() => {
		axios
			.get('http://localhost:3000/db.json')
			.then(({ data: { pizzas } }) => dispatch(setPizzas(pizzas));
	}, []);
	
	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Route path="/" component={Home} exact />
				<Route path="/cart" component={Cart} exact />
			</div>
		</div>
	);
};

export default App;
