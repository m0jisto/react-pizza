import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { fetchPizzas } from './redux/actions/pizzas';

import { Home, Cart } from './pages';
import { Header } from './components';

import './styles/index.scss';

const App = () => {
	const dispatch = useDispatch();
	
	useEffect(() => dispatch(fetchPizzas()), []);
	
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
