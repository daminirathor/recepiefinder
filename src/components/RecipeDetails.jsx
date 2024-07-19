// import PropTypes from 'prop-types';

// function RecipeDetails({ recipe }) {
//   if (!recipe) return null;

//   return (
//     <div>
//       <h2>{recipe.title}</h2>
//       <img src={recipe.image} alt={recipe.title} />
//       <p>{recipe.summary}</p>
//       <ul>
//         {recipe.extendedIngredients.map((ingredient) => (
//           <li key={ingredient.id}>{ingredient.original}</li>
//         ))}
//       </ul>
//       <p>Instructions: {recipe.instructions}</p>
//     </div>
//   );
// }




// RecipeDetails.propTypes = {
//     recipe: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       summary: PropTypes.string.isRequired,
//       extendedIngredients: PropTypes.arrayOf(
//         PropTypes.shape({
//           id: PropTypes.number.isRequired,
//           original: PropTypes.string.isRequired,
//         })
//       ).isRequired,
//       instructions: PropTypes.string.isRequired,
//     }),
//   };

// export default RecipeDetails;



import PropTypes from 'prop-types';

function RecipeDetails({ recipe }) {
  if (!recipe) return null;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="w-1/2  display center h-64 object-cover rounded-lg" />
      <p className="mt-4 text-gray-700" dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
      <ul className="mt-4">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id} className="text-gray-600">
            {ingredient.original}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-gray-700">Instructions: {recipe.instructions}</p>
    </div>
  );
}

RecipeDetails.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    extendedIngredients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        original: PropTypes.string.isRequired,
      })
    ).isRequired,
    instructions: PropTypes.string.isRequired,
  }),
};

export default RecipeDetails;
