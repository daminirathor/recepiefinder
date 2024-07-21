// import './App.css'
// import Search from './components/search'

// function App() {
 

//   return (
//     <>
//     <Search/>
//      </>
//   )
// }

// export default App
import { useState, useEffect } from 'react';
import {Recipefinder,getRecipeDetails} from './components/apicall';
import RecipeCard from './components/card';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [recipe, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bgImage, setBgImage] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=food&client_id=your access key`
        );
        const data = await response.json();
       
          setBgImage(data.urls.full);
        
      } catch (error) {
        console.error('Error fetching the image:', error);
      }
    };

    fetchRandomImage();
  }, []);

  useEffect(() => {
    const handlesearch = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const data = await Recipefinder(query);
        setRecipes(data.results);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };
    handlesearch();
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(query); // Trigger the useEffect to fetch recipes
  };


  const handleSelectRecipe = async (id) => {
    const data = await getRecipeDetails(id);
    setSelectedRecipe(data);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full max-w-screen-xl bg-white bg-opacity-80 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
        <form aria-label="Recipe search" className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-300 ease-in-out shadow-md hover:shadow-lg"
            placeholder="Search delicious recipes..."
            aria-label="Search recipes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button
            type="submit"
            aria-label="Search recipes"
            className="absolute inset-y-0 right-0 flex items-center px-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition-colors duration-300 ease-in-out"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
        {loading && <div className="mt-4 text-center text-blue-600">Loading...</div>}
        {query && !loading && !recipe.length && (
          <div className="mt-4 text-center text-red-600">
            No recipes found for &quot;{query}&quot;
          </div>
        )}
         {selectedRecipe && (
          <div className="mt-8 w-full max-w-screen-xl bg-white p-6 rounded-lg shadow-lg">
            <RecipeDetails recipe={selectedRecipe} />
          </div>
        )}

        <div className="recipe-list mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipe.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onSelectRecipe={handleSelectRecipe} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

