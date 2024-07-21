

import PropTypes from 'prop-types';

function RecipeCard({ recipe, onSelectRecipe }) {
  return (
    <div
      className="cursor-pointer p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
      onClick={() => onSelectRecipe(recipe.id)}
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{recipe.title}</h3>
    </div>
  );
}

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onSelectRecipe: PropTypes.func.isRequired,
};

export default RecipeCard;
