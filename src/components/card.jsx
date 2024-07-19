
// import PropTypes from "prop-types";
// function RecipeCard({recipe}){

//     return(
//         <>
       
//        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-700 m-3 shadow-lg">
//             <a href="/">
//                 <img className="p-8 rounded-t-lg" src={recipe.image} alt={recipe.title} />
//             </a>
//             <div className="px-5 pb-5">
//                 <a href="/">
//                     <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        
//                     </h5>
//                 </a>
//                 <div className="flex items-center mt-2.5 mb-5">
//                     <svg
//                         className="w-4 h-4 text-yellow-300 mr-1"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                     >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>
//                     <svg
//                         className="w-4 h-4 text-yellow-300 mr-1"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                     >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>
//                     <svg
//                         className="w-4 h-4 text-yellow-300 mr-1"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                     >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>
//                     <svg
//                         className="w-4 h-4 text-yellow-300 mr-1"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                     >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>
//                     <svg
//                         className="w-4 h-4 text-gray-200 dark:text-gray-600"
//                         aria-hidden="true"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 22 20"
//                     >
//                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                     </svg>
//                     <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
//                         4.0
//                     </span>
//                 </div>
//                 <div className="flex items-center justify-between">
                    
//                     <a
//                         href="/"
//                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                     >
//                         {recipe.title}
//                     </a>
//                 </div>
//             </div>
//         </div>
       
       
//         </>
//     )
// }


// RecipeCard.propTypes = {
//     recipe: PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       // other properties you use
//     }).isRequired,
//   };

  
// export default RecipeCard;



// import PropTypes from "prop-types";

// function RecipeCard({ recipe, onSelectRecipe }) {
//   return (
//     <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-700 m-3 shadow-lg">
//       <a href="/">
//         <img className="p-8 rounded-t-lg" src={recipe.image} alt={recipe.title} />
//       </a>
//       <div className="px-5 pb-5">
//         <a href="/">
//           <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//             {recipe.title}
//           </h5>
//         </a>
//         <div className="flex items-center mt-2.5 mb-5">
//           {/* Rating SVGs */}
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             onClick={() => onSelectRecipe(recipe.id)}
//           >
//             View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// RecipeCard.propTypes = {
//   recipe: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   }).isRequired,
//   onSelectRecipe: PropTypes.func.isRequired,
// };

// export default RecipeCard;


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
