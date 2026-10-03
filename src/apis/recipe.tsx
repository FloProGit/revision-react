import type {IRecipe} from "../interface";

const RECIPE_API = 'https://restapi.fr/api/florecipe'

export async function getRecipes(queryParams:URLSearchParams,signal:AbortSignal):Promise<IRecipe[]>{
    const UrlRequest= `${RECIPE_API}?${queryParams?`${queryParams}`:''}`;
    const response = await fetch(UrlRequest,{signal});
    if (response.ok){
        const fetchedData = await response.json();
        return Array.isArray(fetchedData)?fetchedData:[fetchedData];
    }
    else{
        throw new Error('erreur getRecipe Api')
    }
}
export async function getRecipe(_id:string):Promise<IRecipe>{
    const response = await fetch(RECIPE_API+'/'+_id);

    if (response.ok){
        return await response.json();
    }
    else{
        throw new Error('error getRecipe');
    }
}
export async function deleteRecipe(_id:string):Promise<string>{
    const reponse = await fetch(RECIPE_API+'/'+_id,{
        method:'DELETE'
    })
    if (reponse.ok){
        return _id;
    }else{
        throw new Error('erreur deleteRecipe');
    }
}
export async function updateRecipe(updatedRecipe:IRecipe):Promise<IRecipe>{
    const {_id,...restRecipe} =updatedRecipe;

        const response = await fetch(RECIPE_API+'/'+_id,{
            method : 'PATCH',
            headers : {
                'Content-Type':'application/json',
            },
            body:JSON.stringify(restRecipe)
        });
        if (response.ok){
            return response.json()
        }else{
            throw new Error('error updateRecipe')
        }
}
export async function createRecipe(newRecipe:IRecipe):Promise<IRecipe>{
    const response = await fetch(RECIPE_API,{
        headers:{
            'Content-Type':'application/json',
        },
        method:'POST',
        body:JSON.stringify(newRecipe)
    })
    if(response.ok){
        return response.json();
    }else{
        throw new Error('error createRecipe')
    }
}
