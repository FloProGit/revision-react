import styles from "./Homepage.module.scss"
import SearchBar from "../../components/SearchBar.jsx";
import {useContext, useEffect, useRef, useState} from "react";
import Loading from "../../components/Loading/Loading.jsx";
import Recipe from "./Components/Recipe/Recipe.jsx";
import {ApiContext} from "../../context/ApiContext.jsx";
function Homepage(){

    const [filter,setFilter] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [recipes,setRecipes] = useState([]);
    const [page,setPage] = useState(1);
    const Apiurl = useContext(ApiContext);



    useEffect(() => {
        const controller = new AbortController()
        console.log('start',controller)
        async function getRecipe(){
            try{
                console.log('getRecipe',controller)

                const response = await fetch(`${Apiurl}?skip=${(page-1)*18}&limit=18`,{signal:controller.signal});
                if (response.ok){
                    const recipesData = await response.json();
                    const newRecipe = Array.isArray(recipesData)?recipesData:[recipesData]

                    setRecipes((r)=>[...r,...newRecipe])
                }
            }catch (error){
                console.log(error)
            }finally {
                setIsLoading(false);
            }
        }
        getRecipe()
        return ()=>{
            controller.abort()
            console.log('return',controller)
        }
    }, [Apiurl, page]);


    function updateRecipe(updatedRecipe){
        setRecipes(recipes.map((r)=>r._id === updatedRecipe._id ? updatedRecipe : r ))
    }

    return <div className={` flex-fill d-flex flex-col container p-20`}>
        <h1 className={`mb-20 my-30`}>
            Découvrez nos nouvelles recettes
        </h1>
        <SearchBar setFilter={setFilter}/>
        <div className={`card d-flex p-20 flex-fill justify-content-center align-items-center ${styles.contentCard} br`}>
        {isLoading && !recipes.length  ? (<Loading/>) : (
            <div className={`d-flex flex-col`}>
            <div className={styles.grid}>
                    { recipes.filter((r)=> r.title.toLowerCase().includes(filter.toLowerCase())).map((recipe)=> (<Recipe key={recipe._id} recipe={recipe} toggleRecipeLiked={updateRecipe}/>))}
            </div>
                <div className={`d-flex justify-content-center align-items-center m-10`}>
                     <button className={`btn btn-primary`} onClick={()=>setPage(page+1)}>voir plus</button>
                </div>
            </div>
        )}
        </div>

    </div>
}

export default Homepage;