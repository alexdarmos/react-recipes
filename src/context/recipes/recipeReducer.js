import { SEARCH_RECIPES } from '../types';

export default (state, action) => {
	switch (action.type) {
		case SEARCH_RECIPES:
			return {
				...state,
				recipes: action.payload
			};
		default:
			return state;
	}
};
