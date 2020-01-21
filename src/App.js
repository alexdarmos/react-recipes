import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeState from './context/recipes/RecipeState';
import Home from './components/pages/Home';

import './App.css';

function App() {
	return (
		<RecipeState>
			<Fragment>
				<div>
					<Router>
						<Switch>
							<Route exact path="/" component={Home} />
						</Switch>
					</Router>
				</div>
			</Fragment>
		</RecipeState>
	);
}

export default App;
