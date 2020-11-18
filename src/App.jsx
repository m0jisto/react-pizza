import React from 'react';
import { Route } from 'react-router-dom';

import { Home, Cart } from './pages';
import { Header } from './components';

import './styles/index.scss';

const App = () => (
	<div className="wrapper">
		<Header />
		<div className="content">
			<Route path="/" component={Home} exact />
			<Route path="/cart" component={Cart} exact />
		</div>
	</div>
);

export default App;
