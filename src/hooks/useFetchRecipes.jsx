import { useEffect, useState} from "react";
import {getRecipes} from "../apis";

export function useFetchRecipes(page) {
    const [recipes,setRecipes] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState([]);

    useEffect(() => {
        const controller = new AbortController()
        async function fetchData(){
            try{
                const queryParams = new URLSearchParams()
                if (page){
                    queryParams.append('skip',(page-1)*18);
                    queryParams.append('limit',18);
                    queryParams.append('sort','createdAt:-1');
                }
                const fetchedRecipes = await getRecipes(queryParams,controller.signal);
                setRecipes((x)=> [...x,...fetchedRecipes]);
            }catch (error){
                setError('erreur useFetchData'+error.message)
            }finally {
                setIsLoading(false);
            }
        }
        fetchData()
        return ()=>{
            controller.abort()
        }
    }, [ page]);

    return [[recipes,setRecipes],isLoading,error]
}