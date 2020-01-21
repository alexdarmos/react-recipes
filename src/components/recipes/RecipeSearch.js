import React, { useState, useContext } from 'react';
import RecipeContext from '../../context/recipes/recipeContext';

const RecipeSearch = () => {
	const recipeContext = useContext(RecipeContext);

	const { searchRecipes } = recipeContext;

	const [recipe, setRecipe] = useState({
		search: ''
	});

	const { search } = recipe;

	const onChange = e => {
		setRecipe({ ...recipe, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();
		searchRecipes(recipe);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="search recipes..."
					name="search"
					value={search}
					onChange={onChange}
				/>
				<input type="submit" value="Search" />
			</form>
		</div>
	);
};

export default RecipeSearch;
