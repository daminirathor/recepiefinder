// import {useEffect, useState} from 'react';
// import Recipefinder from './apicall';
// import RecipeCard from './card';
// function Search(){
//     const[query,setQuery]=useState('');
//     const[recipe,setRecipes]=useState([])
//     useEffect(()=>{
//         const handlesearch=async()=>{
//             const data = await  Recipefinder(query);
//             setRecipes(data.results);

//     }
//    handlesearch();
//     },[query])

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setQuery(query); // This is to trigger the useEffect
//       };

//     return(
//         <>
//         <div className='flex rounded-lg items-center justify-center w-full p-4 bg-gradient-to-r from-gray-200 to-gray-500 shadow-lg' > 
//      <div className='w-1/2 rounded-lg'>
//      <form>   
//     <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//     <div className="relative">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//             </svg>
//         </div>
//         <input
//          type="search"
//           id="default-search" 
//           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//            placeholder="Search delicious recepies..."
//            value={query}
//            onChange={(e)=>setQuery(e.target.value)}
//             required />
//         <button
//          type="submit"
//          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//          onClick={handleSubmit}
//          >Search</button>
//     </div>
// </form>
//      </div>
        
//         </div>
//         <div className="recipe-list">
//         {recipe.map((recipe) => (
//           <RecipeCard key={recipe.id} recipe={recipe} />
//         ))}
//       </div>



//         </>
       
//     )
// }
// export default Search;





// import { useEffect, useState } from 'react';
// import { Recipefinder, getRecipeDetails } from './apicall';
// import RecipeCard from './card';
// import RecipeDetails from './RecipeDetails';

// function Search() {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   useEffect(() => {
//     const handleSearch = async () => {
//       if (query) {
//         const data = await Recipefinder(query);
//         setRecipes(data.results);
//       }
//     };
//     handleSearch();
//   }, [query]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setQuery(query); // This is to trigger the useEffect
//   };

//   const handleSelectRecipe = async (id) => {
//     const data = await getRecipeDetails(id);
//     setSelectedRecipe(data);
//   };

//   return (
//     <>
//       <div className='flex rounded-lg items-center justify-center w-full p-4 bg-gradient-to-r from-gray-200 to-gray-500 shadow-lg'>
//         <div className='w-1/2 rounded-lg'>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//                 </svg>
//               </div>
//               <input
//                 type="search"
//                 id="default-search"
//                 className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="Search delicious recipes..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 required
//               />
//               <button
//                 type="submit"
//                 className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//               >
//                 Search
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="recipe-list">
//         {recipes.map((recipe) => (
//           <RecipeCard key={recipe.id} recipe={recipe} onSelectRecipe={handleSelectRecipe} />
//         ))}
//       </div>
//       {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
//     </>
//   );
// }

// export default Search;

// import { useEffect, useState } from 'react';
// import { Recipefinder, getRecipeDetails } from './apicall';
// import RecipeCard from './card';
// import RecipeDetails from './RecipeDetails';

// function Search() {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   useEffect(() => {
//     const handleSearch = async () => {
//       if (query) {
//         const data = await Recipefinder(query);
//         setRecipes(data.results);
//       }
//     };
//     handleSearch();
//   }, [query]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setQuery(query);
//   };

//   const handleSelectRecipe = async (id) => {
//     const data = await getRecipeDetails(id);
//     setSelectedRecipe(data);
//   };

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
//         <div className="w-full max-w-lg rounded-lg shadow-lg bg-white p-6">
//           <form onSubmit={handleSubmit}>
//             <div className="relative">
//               <input
//                 type="search"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="Search delicious recipes..."
//                 className="w-full p-4 text-sm text-gray-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-2.5 bottom-2.5 bg-blue-700 text-white rounded-lg px-4 py-2"
//               >
//                 Search
//               </button>
//             </div>
//           </form>
//         </div>
//         <div className="recipe-list mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {recipes.map((recipe) => (
//             <RecipeCard key={recipe.id} recipe={recipe} onSelectRecipe={handleSelectRecipe} />
//           ))}
//         </div>
//         {selectedRecipe && (
//           <div className="mt-8 w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
//             <RecipeDetails recipe={selectedRecipe} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Search;

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

