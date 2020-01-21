import React, { useContext } from 'react';
import RecipeItem from './RecipeItem';
import RecipeContext from '../../context/recipes/recipeContext';

const Recipes = () => {
	const recipeContext = useContext(RecipeContext);
	const { recipes } = recipeContext;

	console.log(recipes);
	return (
		<div>
			{recipes.length > 0
				? recipes.map(recipe => (
						<RecipeItem key={recipe.id} recipe={recipe.recipe} />
				  ))
				: 'Search for a recipe'}
		</div>
	);
};

export default Recipes;
