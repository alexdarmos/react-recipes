import React, { Fragment } from 'react';
import RecipeSearch from '../recipes/RecipeSearch';
import Recipes from '../recipes/Recipes';

const Home = () => {
	return (
		<Fragment>
			<RecipeSearch />
			<Recipes />
		</Fragment>
	);
};

export default Home;
