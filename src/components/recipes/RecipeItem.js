import React from 'react';
import PropTypes from 'prop-types';

const RecipeItem = ({ recipe: { label, image } }) => {
	return (
		<div>
			<img src={image} alt={label} />
			<h3>{label}</h3>
		</div>
	);
};

RecipeItem.propTypes = {
	recipe: PropTypes.object.isRequired
};

export default RecipeItem;
