import React, { useReducer } from 'react';
import axios from 'axios';
import RecipeContext from './recipeContext';
import recipeReducer from './recipeReducer';
import {
	SEARCH_RECIPES,
	SET_LOADING,
	CLEAR_RECIPES,
	GET_RECIPE
} from '../types';

const RecipeState = props => {
	const initialState = {
		recipes: []
	};

	const [state, dispatch] = useReducer(recipeReducer, initialState);

	//search recipes
	const searchRecipes = async text => {
		const res = await axios.get('https://api.edamam.com/search', {
			params: {
				q: text,
				app_id: 'c027a9cd',
				app_key: '8bba960e00b73d0a7da5daaa650988e3'
			}
		});

		dispatch({
			type: SEARCH_RECIPES,
			payload: res.data.hits
		});
	};

	return (
		<RecipeContext.Provider
			value={{
				recipes: state.recipes,
				searchRecipes
			}}
		>
			{props.children}
		</RecipeContext.Provider>
	);
};

export default RecipeState;
