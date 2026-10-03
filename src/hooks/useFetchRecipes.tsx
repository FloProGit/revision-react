import { useEffect, useState} from "react";
import {getRecipes} from "../apis";
import type {IRecipe} from "../interface";

export function useFetchRecipes(page:number=0):[[IRecipe[], React.Dispatch<React.SetStateAction<IRecipe[]>>],boolean,string] {
    const [recipes,setRecipes] = useState<IRecipe[]>([]);
    const [isLoading,setIsLoading] = useState<boolean>(true);
    const [error,setError] = useState<string>('');

    useEffect(() => {
        const controller = new AbortController()
        async function fetchData():Promise<void>{
            try{
                const queryParams = new URLSearchParams()
                if (page){
                    queryParams.append('skip',String((page-1)*18));
                    queryParams.append('limit','18');
                    queryParams.append('sort','createdAt:-1');
                }
                const fetchedRecipes = await getRecipes(queryParams,controller.signal);
                setRecipes((x)=> [...x,...fetchedRecipes]);
            }catch (error ){
                if (error instanceof Error) {
                    setError(error.message) // ici TS sait que c'est une Error
                } else {
                    setError('erreur useFetchData')
                }
            }finally {
                setIsLoading(false);
            }
        }
        fetchData()
        return ():void=>{
            controller.abort()
        }
    }, [ page]);

    return [[recipes,setRecipes],isLoading,error]
}