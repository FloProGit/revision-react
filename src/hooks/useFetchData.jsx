import { useEffect, useState} from "react";

export function useFetchData(url,page) {
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState([]);

    useEffect(() => {
        const controller = new AbortController()
        async function getRecipe(){
            try{
                const fullUrl = new URL(url);
                if (page){
                    fullUrl.searchParams.append('skip',(page-1)*18);
                    fullUrl.searchParams.append('limit',18);
                    fullUrl.searchParams.append('sort','createdAt:-1');
                }
                const response = await fetch(fullUrl,{signal:controller.signal});
                if (response.ok){
                    const Data = await response.json();
                    const newData = Array.isArray(Data)?Data:[Data]

                    setData((r)=>[...r,...newData])
                }
            }catch (error){
                setError('erreur useFetchData'+error.message)
            }finally {
                setIsLoading(false);
            }
        }
        getRecipe()
        return ()=>{
            controller.abort()
            console.log('return',controller)
        }
    }, [url, page]);
    return [[data,setData],isLoading,error]
}