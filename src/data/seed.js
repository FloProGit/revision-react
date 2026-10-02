import data from './recipes.js'
export async function seedRecipes(){

    const returnApi = await fetch('https://restapi.fr/api/florecipe',{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)

    })
  console.log(returnApi)
}