
import { useEffect, useState } from 'react';
import { Recipefinder, getRecipeDetails } from './apicall';
import RecipeCard from './card';
import RecipeDetails from './RecipeDetails';

function Search() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const handleSearch = async () => {
      if (query) {
        const data = await Recipefinder(query);
        setRecipes(data.results);
      }
    };
    handleSearch();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(query);
  };

  const handleSelectRecipe = async (id) => {
    const data = await getRecipeDetails(id);
    setSelectedRecipe(data);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 opacity-100" >
        <div className="w-full max-w-lg rounded-lg shadow-lg bg-white p-6">
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search delicious recipes..."
                className="w-full p-4 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2.5 bottom-2.5 bg-blue-700 text-white rounded-lg px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        
        {selectedRecipe && (
          <div className="mt-8 w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
            <RecipeDetails recipe={selectedRecipe} />
          </div>
        )}

        <div className="recipe-list mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onSelectRecipe={handleSelectRecipe} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;

