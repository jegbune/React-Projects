import React, { useEffect, useState } from 'react'
import './RecipesStyle.css'


function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
    .then(Response => Response.json())
    .then(data => {setRecipes(data.recipes)})
      .catch((error)=> console.log(error))
    }, [])
    
    const handleClick = (index) => {
      setSelectedIndex(index)
    }
  
  
  return (
    <div>
      <input type='number' value={selectedIndex}  onChange={e => {setSelectedIndex(parseInt(e.target.value) || 0)}} />
        
      <div className='container'>
        <div className='recipe-menu'>
        {
          recipes.map((recipe,index) => {
            return (
            <p className='list-button' key={index} onClick={() => handleClick(index)}>{recipe.id}. {recipe.name}
            </p>
            )})}
        </div>     
        
        
        <div className='recipe-detail'>
              {recipes.length > 0 && (
                <>
                  <h1>{recipes[selectedIndex].name}</h1>
                  <h2>Ingredient</h2>
                  <ol>
                    {recipes[selectedIndex].ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ol>
                  <h2>Instructions</h2>
                  <ol>
                    {recipes[selectedIndex].instructions.map((instruction, idx) => (
                      <li key={idx}>{instruction}</li>
                    ))}
                  </ol>
                  <h3>image</h3>
                  <img src={recipes[selectedIndex].image} className ='image' alt={recipes[selectedIndex].name} />
                  <h3>Preparation Duration - {recipes[selectedIndex].prepTimeMinutes} mins</h3>
                  <h3>Cooking Duration - {recipes[selectedIndex].cookTimeMinutes} mins</h3>
                  <h3>Rating - {recipes[selectedIndex].rating}</h3>
                  <h3>Meal Type - {recipes[selectedIndex].mealType}</h3>
                </>
              )}

                </div>
              
        </div> 
      </div>
      
  )
}

export default Recipes
