import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/molecules/Navigation';
import HomePage from './components/pages/home';
import NotFound from './components/pages/404';
import Footer from './components/sections/Footer';

const App: React.FC = () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path='/'>
					<HomePage />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
