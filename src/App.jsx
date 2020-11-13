import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { Home, Cart } from './pages';
import { Header } from './components';

import './styles/index.scss';

const App = () => {
	const [pizzas, setPizzas] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:3000/db.json')
			.then(({ data: { pizzas } }) => setPizzas([...pizzas]));
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<Route path="/" render={() => <Home items={pizzas} />} exact />
				<Route path="/cart" component={Cart} exact />
			</div>
		</div>
	);
};

export default App;
