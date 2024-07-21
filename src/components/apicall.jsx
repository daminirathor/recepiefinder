// const Recipefinder=async(query)=>{
//     const response=await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=Your Access Key`)
//     const data= await response.json();
//     return data;

// }
// export default Recipefinder;



// const Recipefinder = async (query) => {
//     const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=Your Access Key`);
//     const data = await response.json();
//     return data;
//   };
  
//   const getRecipeDetails = async (id) => {
//     const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=Your Access Key`);
//     const data = await response.json();
//     return data;
//   };
  
//   export default { Recipefinder, getRecipeDetails };
  
// apicall.js
export const Recipefinder = async (query) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=Your access key`);
  const data = await response.json();
  return data;
};

export const getRecipeDetails = async (id) => {
  const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=Your access key`);
  const data = await response.json();
  return data;
};
